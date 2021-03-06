import './App.css';
import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import createPDF from './components/utils/createPDF'

const App = () => {

  const [buttonValue, setButtonValue] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("Preview");
  const [infoPersonal, setInfoPersonal] = useState([]);
  const [infoEducation, setInfoEducation] = useState([]);
  const [infoExperience, setInfoExperience] = useState([]);

  const changeView = () => {
    if (buttonValue === 0){
      setButtonValue(1);
      setButtonLabel("Go back to editing");
    }else{
      setButtonValue(0);
      setButtonLabel("Preview");
    }
  }

  // populate state variables
  const setStateValue = (componentValues, componentName) => {
    switch(componentName){
      default:
      case "infoExperience":
        setInfoExperience(componentValues);
        break;
      case "infoEducation":
        setInfoEducation(componentValues);
        break;
      case "infoPersonal":
        setInfoPersonal(componentValues);
    }
  }

  const generatePDF = () => {
    const createCV = createPDF ();
    createCV.addPersInfo(infoPersonal);
    createCV.addEducation(infoEducation);
    createCV.addWorkExperience(infoExperience);
    createCV.savePDF(`${infoPersonal[0].firstName} ${infoPersonal[0].lastName} CV.pdf`);
  }
  
    return (
      <div>
        <header>
          <h1>Create your CV</h1>
        </header>
        <main>
          <PersonalInfo screenView={buttonValue} getStateValues = {setStateValue}/>
          <Education screenView={buttonValue} getStateValues = {setStateValue}/>
          <WorkExperience screenView={buttonValue} getStateValues = {setStateValue}/>
          <div className="bottom-buttons">
            <button className="preview-button buttons" onClick= {changeView}>{buttonLabel}</button>
            <button className="generatePDF-button buttons" onClick= {generatePDF}>Generate PDF</button>    
          </div>
        </main>
        <footer></footer>
      </div>
    );
}

export default App;
