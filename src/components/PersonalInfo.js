import React, { useState, useEffect } from "react";

const PersonalInfo = ({screenView, getStateValues}) => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[telephone, setTelephone] = useState("");
    
    // update state values
    const changeInfo = (event) =>{
        switch(event.target.name){
            default:
            case "firstName":
                setFirstName(event.target.value);
                break;
            case "lastName":
                setLastName(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "telephone":
                setTelephone(event.target.value);               
        }
	}
    
    // This line gives a warning. In this case I think it is fine to ignore it.
    useEffect(() => {
        getStateValues([{firstName, lastName, email, telephone}], "infoPersonal");
      },[firstName, lastName, email, telephone]);
      

    return(  
        screenView === 0 ?

            //Edit screen           
            <div className="edit-section-container"> 
                <h3 className="edit-section-header">Personal Information</h3>
                <input type="text" name ="firstName" placeholder="First name" value={firstName} onChange={changeInfo}/>
                <input type="text" name ="lastName" placeholder="Last name" value={lastName} onChange={changeInfo}></input>
                <input type="email" name ="email" placeholder="Email"  value={email} onChange={changeInfo}></input>
                <input type="tel" name ="telephone" placeholder="Telephone"  value={telephone} onChange={changeInfo}></input>
            </div>

        :   //Preview screen
            <div className="preview-personal-container">
                <h3 className="preview-section-header">
                    <label>{firstName}</label>&nbsp;
                    <label>{lastName}</label>
                </h3>
                <div className="contact-telephone">
                    <label className="contact">Telephone: </label>
                    <label className="contact-detail">{telephone}</label>                        
                </div>
                <div className="contact-email">
                    <label className="contact">Email: </label>
                    <label className="contact-detail">{email}</label>                        
                </div>
                <div className="grey-line"></div>                    
            </div>
    );
}

export default PersonalInfo;