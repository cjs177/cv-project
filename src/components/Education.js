import React, {Component} from "react";
import "../Style.css"

class Education extends Component{
    constructor(props){
        super(props);

        this.state = {
            displayEdu: true,
        }

    }
    sumbitSchoolName= (e) => {
        this.setState({
            schoolValue: e.target.value,
        });
    };

    sumbitMajor= (e) => {
        this.setState({
            majorValue: e.target.value,
        });
    };

    sumbitStudyDate= (e) => {
        this.setState({
            studyValue: e.target.value,
        });
    };

    submitButton = (e) => {
        e.preventDefault();
        this.setState({
            displayEdu: false,
        });
    };

    editButton = (e) => {
        e.preventDefault();
        this.setState({
            displayEdu: true,
        });
    };

    render(){
        const { displayEdu } = this.state;
        if(!displayEdu){
            return (
                <div class="eduContainer">
                    <form onSubmit={this.editButton}>
                    School:
                    {this.state.schoolValue}
                    <br/>
                    Major: 
                    {this.state.majorValue}
                    <br/>
                    Study Date: 
                    {this.state.studyValue}
                    <br/>
                    <button type="submit" id="eduEdit" onClick={this.state.editButton}>Edit</button>
                    </form>
                </div>
            );
        }

        return(
            <div class="eduContainer">
                <form onSubmit={this.submitButton}>
                    <label htmlFor="schoolName">School:</label>
                    <input type="text" id="schoolName" onChange={this.sumbitSchoolName} value={this.state.schoolValue} required/>
                    <br/>
                    <label htmlFro="majorTitle">Major:</label>
                    <input type="text" id="majorTitle" onChange={this.sumbitMajor} value={this.state.majorValue} required/>
                    <br/>
                    <label htmlFor="studyDate">Date of Study:</label>
                    <input type="date" id="studyDate" onChange={this.sumbitStudyDate} value={this.state.studyValue} required/>
                    <br/>
                    <button type="submit" id="eduSubmit" onClick={this.state.submitButton}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Education;