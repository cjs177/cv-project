import React, {Component} from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import "./Style.css";
class App extends Component {
  constructor(){
    super();
  }

  render(){
  return (
    <div>
          <h1>CV App</h1>
          <General/><br/>
          <Education/><br/>
          <Experience/>
    </div>
  );
}
}

export default App;