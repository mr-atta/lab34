import React, { useEffect, useState } from "react";
import { FormGroup, Card, Elevation, Button } from "@blueprintjs/core";
import superagent, { saveCookies } from "superagent";
import cookie from "react-cookies";
import List from "./list.js";
import "./todo.css";
const ToDo = () => {
    const [list, setList] = useState([]);
    const [toDo, setToDo] = useState("");
    const [assignee, setAssignee] = useState("");
    const [complete, setComplete] = useState('pending')
    const [incomplete, setIncomplete] = useState([]);
    const API = "https://project-34-to-do.herokuapp.com";
    const [showPage, setShowPage] = useState(false);
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();

    const handleChangeStart = (e) => {
        setStart(e.target.value);
    }

    const handleChangeFinish = (e) => {
        setFinish(e.target.value);
    }

    const handleChangeAssigne = (e) => {
        setAssignee(e.target.value);
    };
    const handleChangeITem = (e) => {
        setToDo(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            toDo: toDo,
            assignee: assignee,
            complete: complete,
            start, 
            finish
        };
        addItem(obj);
        e.target.reset();
    };

    async function addItem(item) {
        const token = cookie.load("token");
        let respone = await superagent
            .post(`${API}/todo`, item)
            .set("authorization", `Bearer ${token}`);
        console.log(respone);
        setShowPage(true);
    }
    useEffect(() => {
        let incompleteCount = list.filter(item => item.complete !== 'complete').length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
    }, [list]);

    return (
        <>
            <header style={{ width: "1000px", margin: "0 auto" }}>
                <nav
                    className="bp3-navbar .modifier "
                    style={{ color: "white", backgroundColor: "#5c7080" }}
                >
                    <h1 style={{ color: "white" }}>To Do List Manger: ({incomplete})</h1>
                </nav>
            </header>
            <div className="div-flex">
                <div className="toDo">
                    <Card interactive={true} elevation={Elevation.TWO}>
                        <form onSubmit={handleSubmit}>
                            <h2>Add To Do</h2>
                            <FormGroup label="To Do" labelFor="ToDo">
                                <input
                                    className="bp3-input .modifier"
                                    onChange={handleChangeITem}
                                    name="ToDo"
                                    type="text"
                                    placeholder="Item Details"
                                    dir="auto"
                                />
                            </FormGroup>

                            <FormGroup label="Assigned To" labelFor="assignee">
                                <input
                                    className="bp3-input .modifier"
                                    onChange={handleChangeAssigne}
                                    name="assignee"
                                    type="text"
                                    placeholder="Assignee Name"
                                    dir="auto"
                                />
                            </FormGroup>
                            <FormGroup label="start time" labelFor="time">
                                <input
                                    className="bp3-input .modifier"
                                    onChange={handleChangeStart}
                                    name="start"
                                    type="date"
                                    placeholder="time"
                                    dir="auto"
                                />
                            </FormGroup>
                            <FormGroup label="finish time" labelFor="time">
                                <input
                                    className="bp3-input .modifier"
                                    onChange={handleChangeFinish}
                                    name="finish"
                                    type="date"
                                    placeholder="time"
                                    dir="auto"
                                />
                            </FormGroup>
                            <br />
                            <br />

                            <label>
                                <Button
                                    type="submit"
                                    className="bp3-intent-primary"
                                    style={{ width: "175px", backgroundColor: "#5c7080" }}
                                >
                                    Add Item
                                </Button>
                            </label>
                        </form>
                    </Card>
                </div>
                <div>
                    <List list={list} setList={setList} setComplete={setComplete}
                        complete={complete} showPage={showPage} />
                </div>
            </div>
        </>
    );
};

export default ToDo;