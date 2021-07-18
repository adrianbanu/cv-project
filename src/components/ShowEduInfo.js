import React from "react";
import {format} from 'date-fns';

function ShowEduInfo(props) {
  let dateValues;
  if (props.valueStartDate === "" || props.valueEndDate === ""){
    dateValues = " ";
  }else{
    dateValues = `${format(new Date(props.valueStartDate), 'MMMM yyyy')} - ${format(new Date(props.valueEndDate), 'MMMM yyyy')}`;
  }

  return (
    props.screenView === 0 ?

      // Edit screen
      <div className="edit-section-container" key={props.elementId}>
        <input
          type="text"
          name="titleAwarded"
          placeholder="Name of title"
          value={props.valueTitle}
          onChange={(evt) => props.showInput(props.elementId, evt)}
        />
        <input
          type="text"
          name="nameOrganization"
          placeholder="Name of organization"
          value={props.valueOrganization}
          onChange={(evt) => props.showInput(props.elementId, evt)}
        />
        
        <input
          type={props.inputType} 
          name="startDate"
          placeholder="Start date"
          onFocus={props.focus}
          onBlur={props.blur}
          onChange={(evt) => props.showInput(props.elementId, evt)}
          value={props.valueStartDate}
        />
        
        <input
          type={props.inputType}
          name="endDate"
          placeholder="End date"
          onFocus={props.focus}
          onBlur={props.blur}
          onChange={(evt) => props.showInput(props.elementId, evt)}
          value={props.valueEndDate}
        />
        
        <button className="edit-buttons buttons"
          onClick={() => props.deleteEducation(props.elementId)}
          onChange={(evt) => props.showInput(props.elementId, evt)}
        >
          Delete
        </button>
      </div>

    : //Preview screen
      <div className="preview-education-container">
        <div className="title">{props.valueTitle}</div>
        <div className="name-organization">{props.valueOrganization}</div>
        <div className="start-end">
          <label>{dateValues}</label>
        </div>
      </div>
  );
}

export default ShowEduInfo;
