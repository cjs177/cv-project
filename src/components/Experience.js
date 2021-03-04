import React, {Component} from "react";
import "../Style.css"

class Experience extends Component{
    constructor(){
        super();

        this.state = {
            displayForm: true,
        }

    }
    sumbitCompanyName= (e) => {
        this.setState({
            companyValue: e.target.value,
        });
    };

    sumbitPostition= (e) => {
        this.setState({
            positionValue: e.target.value,
        });
    };

    sumbitTasks= (e) => {
        this.setState({
            tasksValue: e.target.value,
        });
    };

    sumbitStartDate= (e) => {
        this.setState({
            startValue: e.target.value,
        });
    };

    sumbitEndDate= (e) => {
        this.setState({
            endValue: e.target.value,
        });
    };

    submitButton = (e) => {
        e.preventDefault();
        this.setState({
            displayForm: false,
        });
    };

    editButton = (e) => {
        e.preventDefault();
        this.setState({
            displayForm: true,
        });
    };

    render(){
        const { displayForm } = this.state;
        if(!displayForm){
            return (
                <div class="genContainer">
                    <form onSubmit={this.editButton}>
                    Company:
                    {this.state.companyValue}
                    <br/>
                    Position: 
                    {this.state.positionValue}
                    <br/>
                    Main Tasks: 
                    {this.state.tasksValue}
                    <br/>
                    Start Date: 
                    {this.state.startValue}
                    <br/>
                    End Date: 
                    {this.state.endValue}
                    <br/>
                    <button type="submit" id="expEdit" onClick={this.state.editButton}>Edit</button>
                    </form>
                </div>
            );
        }

        return(
            <div class="expContainer">
                <form onSubmit={this.submitButton}>
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" onChange={this.sumbitCompanyName} value={this.state.companyValue} required/>
                    <br/>
                    <label htmlFor="positiontitle">Position Title:</label>
                    <input type="text" id="positionTitle" onChange={this.sumbitPostition} value={this.state.positionValue} required/>
                    <br/>
                    <label htmlFor="mainTasks">Main Tasks:</label>
                    <textarea id="mainTasks" onChange={this.sumbitTasks} value={this.state.tasksValue} required/>
                    <br/>
                    <label htmlFor="dateStarted">Start Date:</label>
                    <input type="date" id="dateStarted" onChange={this.sumbitStartDate} value={this.state.startValue} required/>
                    <br/>
                    <label htmlFor="dateEnded">End Date:</label><br/>
                    <input type="date" id="dateEnded" onChange={this.sumbitEndDate} value={this.state.endValue} required/>
                    <br/>
                    <button type="submit" id="expSubmit" onClick={this.state.submitButton}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Experience;