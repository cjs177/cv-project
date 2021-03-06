import React, { useState } from "react";
import "../Style.css"

const Education = () =>{
    const [displayForm, setDisplayForm] = useState(true);

    const [schoolNameValue, setSchoolNameValue] = useState("");

    const [majorValue, setMajorValue] = useState("");

    const [studyDateValue, setStudyDateValue] = useState("");

    const updateSchoolName= (e) => {
        setSchoolNameValue(e.target.value);
    }

    const updateMajor= (e) => {
        setMajorValue(e.target.value);
    }

    const updateDateValue= (e) => {
        setStudyDateValue(e.target.value);
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
                <div class="eduEditContainer">
                    <form onSubmit={editButton}>
                    <p>School:</p>
                    {schoolNameValue}
                    <br/>
                    <p>Major:</p>
                    {majorValue}
                    <br/>
                    <p>Study Date:</p>
                    {studyDateValue}
                    <br/>
                    <button type="submit" id="eduEdit" onClick={editButton}>Edit</button>
                    </form>
                </div>
            );
        }

        return(
            <div class="eduContainer">
                <form onSubmit={submitButton}>
                    <label htmlFor="schoolName">School:</label>
                    <input type="text" id="schoolName" onChange={updateSchoolName} value={schoolNameValue} required/>
                    <br/>
                    <label htmlFro="majorTitle">Major:</label>
                    <input type="text" id="majorTitle" onChange={updateMajor} value={majorValue} required/>
                    <br/>
                    <label htmlFor="studyDate">Date of Study:</label>
                    <input type="date" id="studyDate" onChange={updateDateValue} value={studyDateValue} required/>
                    <br/>
                    <button type="submit" id="eduSubmit" onClick={submitButton}>Submit</button>
                </form>
            </div>
        );
}

export default Education;