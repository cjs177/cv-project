import React, { useState } from "react";
import "../Style.css"

const Experience = () =>{
    const [displayForm, setDisplayForm] = useState(true);

    const [companyValue, setCompanyValue] = useState("");

    const [positionValue, setpositionValue] = useState("");

    const [tasksValue, setTasksValue] = useState("");

    const [startValue, setStartValue] = useState("");

    const [endValue, setEndValue] = useState("");

    const updateCompany= (e) => {
        setCompanyValue(e.target.value);
    }

    const updatePosition= (e) => {
        setpositionValue(e.target.value);
    }

    const updateTasks= (e) => {
        setTasksValue(e.target.value);
    }

    const updateStart= (e) => {
        setStartValue(e.target.value);
    }


    const updateEnd= (e) => {
        setEndValue(e.target.value);
    }


    const submitButton = (e) => {
        e.preventDefault();
        setDisplayForm(false);
    };

    const editButton = (e) => {
        e.preventDefault();
        setDisplayForm(true);
    };
   

        if(!displayForm){
            return (
                <div class="expEditContainer">
                    <form onSubmit={editButton}>
                    Company:
                    {companyValue}
                    <br/>
                    Position: 
                    {positionValue}
                    <br/>
                    Main Tasks: 
                    {tasksValue}
                    <br/>
                    Start Date: 
                    {startValue}
                    <br/>
                    End Date: 
                    {endValue}
                    <br/>
                    <button type="submit" id="expEdit" onClick={editButton}>Edit</button>
                    </form>
                </div>
            );
        }

        return(
            <div class="expContainer">
                <form onSubmit={submitButton}>
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" onChange={updateCompany} value={companyValue} required/>
                    <br/>
                    <label htmlFor="positiontitle">Position Title:</label>
                    <input type="text" id="positionTitle" onChange={updatePosition} value={positionValue} required/>
                    <br/>
                    <label htmlFor="mainTasks">Main Tasks:</label>
                    <textarea id="mainTasks" onChange={updateTasks} value={tasksValue} required/>
                    <br/>
                    <label htmlFor="dateStarted">Start Date:</label>
                    <input type="date" id="dateStarted" onChange={updateStart} value={startValue} required/>
                    <br/>
                    <label htmlFor="dateEnded">End Date:</label><br/>
                    <input type="date" id="dateEnded" onChange={updateEnd} value={endValue} required/>
                    <br/>
                    <button type="submit" id="expSubmit" onClick={submitButton}>Submit</button>
                </form>
            </div>
        );
}

export default Experience;