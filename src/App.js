import React, {Component} from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import "./Style.css";
class App extends Component {
  constructor(){
    super();
    this.state = {
      showForm: true,
    };
  }

  displayForm(props){
    if(!props.display) {
      return null;
    }
    return(
      <div className="formSheet">
          <General onSubmitTask = {this.onSubmitTask}/><br/> 
      </div>
    );
  }

  onSubmitTask() {
    this.setState(state => ({
      showForm: !state.showForm
    }));
  };

  render(){
  return (
    <div>
          <General/><br/>
          <Education/><br/>
          <Experience/>
    </div>
  );
}
}

export default App;
