import React, { Component } from "react";
import ShowExperienceInfo from "./ShowExperienceInfo";

class WorkExperience extends Component{

    constructor(props){
        super(props)
        this.state={
            WorkExp: {
                titleOcupation : "",
                nameOrganization: "",
                startDate : "",
                endDate : "",
                mainActivities: "",
                id : 0
            },
            experienceInfo : [],
            type: "text"
        }
    }

    onFocus = () => {
        this.setState({
          type: 'date'
        });
    }

    onBlur = () =>{
        this.setState({
            type: 'text'
        })
    }

    deleteExperience = (id) =>{
        this.setState(state => {
            const experienceInfo = state.experienceInfo.filter((item) => id !== item.id);

            this.props.getStateValues(experienceInfo, "valoriExp"); 
       
            return {
                experienceInfo,
            };
          });
    }

    changeInfo = (id, event) =>{
        let experienceInfo = [...this.state.experienceInfo];
        let index = experienceInfo.findIndex((item) => id === item.id)
        experienceInfo[index].[event.target.name] = event.target.value;

        this.props.getStateValues(experienceInfo, "valoriExp"); 

        this.setState({
                experienceInfo
            }
        )
	}

    addToExperience = () =>{
        this.setState({
            experienceInfo : [...this.state.experienceInfo, this.state.WorkExp],
            WorkExp :{titleOcupation : "", nameOrganization : "", startDate : "", endDate : "", mainActivities: "", id : this.state.WorkExp.id + 1}
        })
    }

    loopExperienceInfo = () =>{
        this.state.experienceInfo.length === 0 && this.addToExperience()
        let experienceSection = []
        for(let i = 0; i < this.state.experienceInfo.length; i++){
            experienceSection.push(<ShowExperienceInfo valueTitle = {this.state.experienceInfo[i].titleOcupation} 
                valueOrganization={this.state.experienceInfo[i].nameOrganization}
                valueStartDate = {this.state.experienceInfo[i].startDate} 
                valueEndDate = {this.state.experienceInfo[i].endDate}
                mainActivities = {this.state.experienceInfo[i].mainActivities}
                elementId = {this.state.experienceInfo[i].id}
                key = {this.state.experienceInfo[i].id}
                deleteExperience = {this.deleteExperience}
                screenView = {this.props.screenView}
                showInput = {this.changeInfo} blur = {this.onBlur} focus = {this.onFocus} inputType ={this.state.type}/>)
        }

        return <div className="experience-section">
            {experienceSection}
        </div>
    }

    render(){
        let classNameSection = this.props.screenView === 0 ? "edit-section" : "preview-section";
        let classNameSectionHeader = this.props.screenView === 0 ? "edit-section-header" : "preview-work-header";
        let classNameButtons = this.props.screenView === 0 ? "edit-buttons buttons" : "no-display";
        return(
            <div className={classNameSection}>
                <h3 className={classNameSectionHeader}>Work experience</h3>
                {this.loopExperienceInfo()}
                <button className={classNameButtons} onClick={this.addToExperience}>Add experience </button>
            </div>
        );
    }
}

export default WorkExperience;