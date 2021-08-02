import React, { useState } from "react";
import ShowEduInfo from "./ShowEduInfo";

const Education = (props) => {

    const[titleAwarded, setTitleAwarded] = useState("");
    const[nameOrganization, setNameOrganization] = useState("");
    const[startDate, setStartDate] = useState("");
    const[endDate, setEndDate] = useState("");
    const[id, setId]= useState(0);

    const[educationInfo, setEducationInfo] = useState([]);
    const[type, setType] = useState("text");

    const onFocus = () => {
        setType('date');
    }

    const onBlur = () =>{
        setType('text');
    }

    const deleteEducation = (id) =>{
        const nextEducationInfo = educationInfo.filter((item) => id !== item.id);
        props.getStateValues(nextEducationInfo, "infoEducation"); 
        setEducationInfo(nextEducationInfo);
    }

    const changeInfo = (id, event) =>{
        let changedEducationInfo = [...educationInfo];
        let index = changedEducationInfo.findIndex((item) => id === item.id)
        changedEducationInfo[index][event.target.name] = event.target.value;

        props.getStateValues(changedEducationInfo, "infoEducation") // send the array in App 

        setEducationInfo(changedEducationInfo);
	}

    const addToEducation = () =>{
        setTitleAwarded("");
        setNameOrganization("");
        setStartDate("");
        setEndDate("");
        setId(id + 1);

        setEducationInfo([...educationInfo, {titleAwarded, nameOrganization, startDate, endDate, id}]);
    }

    const loopEducationInfo = () =>{
        educationInfo.length === 0 && addToEducation()
        let educationSection = []
        for(let i = 0; i < educationInfo.length; i++){
            educationSection.push(<ShowEduInfo valueTitle = {educationInfo[i].titleAwarded} 
                valueOrganization={educationInfo[i].nameOrganization}
                valueStartDate = {educationInfo[i].startDate} 
                valueEndDate = {educationInfo[i].endDate}
                elementId = {educationInfo[i].id}
                key = {educationInfo[i].id}// no warning in console
                deleteEducation = {deleteEducation}
                screenView = {props.screenView} 
                showInput = {changeInfo} blur = {onBlur} focus = {onFocus} inputType ={type}/>)
        }

        return <div className="education-section">
            {educationSection}
        </div>
    }

    let classNameSection = props.screenView === 0 ? "edit-section" : "preview-section";
    let classNameSectionHeader = props.screenView === 0 ? "edit-section-header" : "preview-education-header";
    let classNameButtons = props.screenView === 0 ? "edit-buttons buttons" : "no-display";
    return(
        <div className={classNameSection}>
            <h3 className={classNameSectionHeader}>Education and training</h3>
            {loopEducationInfo()}
            <button className={classNameButtons} onClick={addToEducation}>Add education </button>
        </div>
    );
}

export default Education;   