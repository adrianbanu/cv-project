import React, { Component } from "react";
import ShowEduInfo from "./ShowEduInfo";

class Education extends Component{

    constructor(props){
        super(props)
        this.state={
            EduExp: {
                titleAwarded : "",
                nameOrganization: "",
                startDate : "",
                endDate : "",
                id : 0
            },
            educationInfo : [],
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

    deleteEducation = (id) =>{
        this.setState(state => {
            const educationInfo = state.educationInfo.filter((item) => id !== item.id);
            
            this.props.getStateValues(educationInfo, "valoriEdu") // send the array in App
            
            return {
                educationInfo,
            };
          });
    }

    changeInfo = (id, event) =>{
        let educationInfo = [...this.state.educationInfo];
        let index = educationInfo.findIndex((item) => id === item.id)
        educationInfo[index].[event.target.name] = event.target.value;

        this.props.getStateValues(educationInfo, "valoriEdu") // send the array in App

        this.setState({
                educationInfo
            }
        )
	}

    addToEducation = () =>{
        this.setState({
            educationInfo : [...this.state.educationInfo, this.state.EduExp],
            EduExp :{titleAwarded : "", nameOrganization : "", startDate : "", endDate : "", id : this.state.EduExp.id + 1}
        })
        
    }

    loopEducationInfo = () =>{
        this.state.educationInfo.length === 0 && this.addToEducation()
        let educationSection = []
        for(let i = 0; i < this.state.educationInfo.length; i++){
            educationSection.push(<ShowEduInfo valueTitle = {this.state.educationInfo[i].titleAwarded} 
                valueOrganization={this.state.educationInfo[i].nameOrganization}
                valueStartDate = {this.state.educationInfo[i].startDate} 
                valueEndDate = {this.state.educationInfo[i].endDate}
                elementId = {this.state.educationInfo[i].id}
                key = {this.state.educationInfo[i].id}// to not have the warning in console
                deleteEducation = {this.deleteEducation}
                screenView = {this.props.screenView} 
                showInput = {this.changeInfo} blur = {this.onBlur} focus = {this.onFocus} inputType ={this.state.type}/>)
        }

        return <div className="education-section">
            {educationSection}
        </div>
    }

    render(){
        let classNameSection = this.props.screenView === 0 ? "edit-section" : "preview-section";
        let classNameSectionHeader = this.props.screenView === 0 ? "edit-section-header" : "preview-education-header";
        let classNameButtons = this.props.screenView === 0 ? "edit-buttons buttons" : "no-display";
        return(
            <div className={classNameSection}>
                <h3 className={classNameSectionHeader}>Education and training</h3>
                {this.loopEducationInfo()}
                <button className={classNameButtons} onClick={this.addToEducation}>Add education </button>
            </div>
        );
    }
}

export default Education;   