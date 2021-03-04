import React, {Component} from "react";
import "../Style.css"

class General extends Component{
    constructor(props){
        super(props);

        this.state = {
            displayForm: true,
        }

    }

    sumbitName= (e) => {
        this.setState({
            nameValue: e.target.value,
        });
    };

    sumbitEmail= (e) => {
        this.setState({
            emailValue: e.target.value,
        });
    };

    sumbitPhone= (e) => {
        this.setState({
            phoneValue: e.target.value,
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

    render() {
        const { displayForm } = this.state;
        if(!displayForm){
            return (
                <div class="genContainer">
                    <form onSubmit={this.editButton}>
                    Name:
                    {this.state.nameValue}
                    <br/>
                    Email: 
                    {this.state.emailValue}
                    <br/>
                    Phone: 
                    {this.state.phoneValue}
                    <br/>
                    <button type="submit" id="genEdit" onClick={this.state.editButton}>Edit</button>
                    </form>
                </div>
            );
        }

        return(
            <div class="genContainer">
                <form onSubmit={this.submitButton}> 
                    <label htmlFor="nameInput">Name:</label>
                    <input type="text" id="nameInput" onChange={this.sumbitName} value={this.state.nameValue} required/>
                    <br/>
                    <label htmlFor="emailInput">Email:</label>
                    <input type="email" id="emailInput" onChange={this.sumbitEmail} value={this.state.emailValue} required/>
                    <br/>
                    <label htmlFor="phoneInput">Phone:</label>
                    <input type="tel" id="phoneInput" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={this.sumbitPhone} value={this.state.phoneValue}/>
                    <br/>
                    <button type="submit" id="genSubmit" onClick={this.state.submitButton}>Submit</button>
                </form>
            </div>
        );
    }
}

export default General;