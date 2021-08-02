import React, { useState } from "react";
import ShowExperienceInfo from "./ShowExperienceInfo";

const WorkExperience = (props) => {

    const[titleOcupation, setTitleOcupation] = useState("");
    const[nameOrganization, setNameOrganization] = useState("");
    const[startDate, setStartDate] = useState("");
    const[endDate, setEndDate] = useState("");
    const[mainActivities, setMainActivities] = useState("");
    const[id, setId]= useState(0);

    const[experienceInfo, setExperienceInfo] = useState([]);
    const[type, setType] = useState("text");

    const onFocus = () => {
        setType('date');
    }

    const onBlur = () =>{
        setType('text');
    }

    const deleteExperience = (id) =>{
        const nextExperienceInfo = experienceInfo.filter((item) => id !== item.id);
        props.getStateValues(nextExperienceInfo, "infoExperience"); 
        setExperienceInfo(nextExperienceInfo);
    }

    const changeInfo = (id, event) =>{
        let changedExperienceInfo = [...experienceInfo];
        let index = changedExperienceInfo.findIndex((item) => id === item.id)
        changedExperienceInfo[index][event.target.name] = event.target.value;

        props.getStateValues(changedExperienceInfo, "infoExperience"); 

        setExperienceInfo(changedExperienceInfo);
	}

    const addToExperience = () => {
        setTitleOcupation("");
        setNameOrganization("");
        setStartDate("");
        setEndDate("");
        setMainActivities("");
        setId(id + 1);

        setExperienceInfo([...experienceInfo, {titleOcupation, nameOrganization, startDate, endDate, mainActivities, id}]);
    }

    const loopExperienceInfo = () =>{
        experienceInfo.length === 0 && addToExperience()
        let experienceSection = []
        for(let i = 0; i < experienceInfo.length; i++){
            experienceSection.push(<ShowExperienceInfo valueTitle = {experienceInfo[i].titleOcupation} 
                valueOrganization={experienceInfo[i].nameOrganization}
                valueStartDate = {experienceInfo[i].startDate} 
                valueEndDate = {experienceInfo[i].endDate}
                mainActivities = {experienceInfo[i].mainActivities}
                elementId = {experienceInfo[i].id}
                key = {experienceInfo[i].id}
                deleteExperience = {deleteExperience}
                screenView = {props.screenView}
                showInput = {changeInfo} blur = {onBlur} focus = {onFocus} inputType ={type}/>)
        }

        return <div className="experience-section">
            {experienceSection}
        </div>
    }

    let classNameSection = props.screenView === 0 ? "edit-section" : "preview-section";
    let classNameSectionHeader = props.screenView === 0 ? "edit-section-header" : "preview-work-header";
    let classNameButtons = props.screenView === 0 ? "edit-buttons buttons" : "no-display";
    return(
        <div className={classNameSection}>
            <h3 className={classNameSectionHeader}>Work experience</h3>
            {loopExperienceInfo()}
            <button className={classNameButtons} onClick={addToExperience}>Add experience </button>
        </div>
    );
}

export default WorkExperience;