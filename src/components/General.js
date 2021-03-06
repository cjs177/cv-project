import React, { useState } from "react";
import "../Style.css"

const General = () =>{
    const [displayForm, setDisplayForm] = useState(true);

    const [nameValue, setNameValue] = useState("");

    const [emailValue, setEmailValue] = useState("");

    const [phoneValue, setPhoneValue] = useState("");

    const updateName= (e) => {
        setNameValue(e.target.value);
    }

    const updateEmail= (e) => {
        setEmailValue(e.target.value);
    }

    const updatePhone= (e) => {
        setPhoneValue(e.target.value);
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
                <div class="genEditContainer">
                    <form onSubmit={editButton}>
                    <p>Name:</p>
                    {nameValue}
                    <br/>
                    <p>Email:</p>
                    {emailValue}
                    <br/>
                    <p>Phone: </p>
                    {phoneValue}
                    <br/>
                    <button type="submit" id="genEdit" onClick={editButton}>Edit</button>
                    </form>
                </div>
            );
        }

        return(
            <div class="genContainer">
                <form onSubmit={submitButton}> 
                    <label htmlFor="nameInput">Name:</label>
                    <input type="text" id="nameInput" onChange={updateName} value={nameValue} required/>
                    <br/>
                    <label htmlFor="emailInput">Email:</label>
                    <input type="email" id="emailInput" onChange={updateEmail} value={emailValue} required/>
                    <br/>
                    <label htmlFor="phoneInput">Phone:</label>
                    <input type="tel" id="phoneInput" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={updatePhone} value={phoneValue}/>
                    <br/>
                    <button type="submit" id="genSubmit" onClick={submitButton}>Submit</button>
                </form>
            </div>
        );
}

export default General;