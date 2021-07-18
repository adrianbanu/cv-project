import './App.css';
import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import createPDF from './components/utils/createPDF'

class App extends Component {
  constructor(){
    super();
    this.state={
      buttonValue : 0,
      buttonLabel : "Preview",
      valoriPersonal: [],
      valoriEdu : [],
      valoriExp : [],
    }
    this.changeView= this.changeView.bind(this);
  }

  changeView(){
    if (this.state.buttonValue === 0){
      this.setState({
        buttonValue : 1,
        buttonLabel : "Go back to editing"
      })
    }else{
      this.setState({
        buttonValue : 0,
        buttonLabel : "Preview"
      })
    }
  }

  setStateValue = (valoriExp, compName) => {
    this.setState({
      [compName] : valoriExp // Daca nu folosesc paranteze patrate nu merge. Pare ca nu recunoaste argumentul... De ce??? Vezi "computed property names"
    })
  }

  generatePDF = () => {
    const createCV = createPDF ();
    createCV.addPersInfo(this.state.valoriPersonal);
    createCV.addEducation(this.state.valoriEdu);
    createCV.addWorkExperience(this.state.valoriExp);
    createCV.savePDF(`${this.state.valoriPersonal[0].firstName} ${this.state.valoriPersonal[0].lastName} CV.pdf`);
  }
  
  render(){
    return (
      <div>
        <header>
          <h1>Create your CV</h1>
        </header>
        <main>
          <PersonalInfo screenView={this.state.buttonValue} getStateValues = {this.setStateValue}/>
          <Education screenView={this.state.buttonValue} getStateValues = {this.setStateValue}/>
          <WorkExperience screenView={this.state.buttonValue} getStateValues = {this.setStateValue}/>
          <div className="bottom-buttons">
            <button className="preview-button buttons" onClick= {this.changeView}>{this.state.buttonLabel}</button>
            <button className="generatePDF-button buttons" onClick= {this.generatePDF}>Generate PDF</button>    
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
