import React, { Component } from "react";

class PersonalInfo extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            telephone: ""
            
        }
    }
    
    changeInfo = (event) =>{
		this.setState ({
			[event.target.name]: event.target.value,
		},
        () =>{
            this.props.getStateValues([this.state], "valoriPersonal")
        })
	}

    render(){
        return(  
            this.props.screenView === 0 ?

                //Edit screen           
                <div className="edit-section-container"> 
                    <h3 className="edit-section-header">Personal Information</h3>
                    <input type="text" name ="firstName" placeholder="First name" value={this.state.firstName} onChange={this.changeInfo}/>
                    <input type="text" name ="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.changeInfo}></input>
                    <input type="email" name ="email" placeholder="Email"  value={this.state.email} onChange={this.changeInfo}></input>
                    <input type="tel" name ="telephone" placeholder="Telephone"  value={this.state.telephone} onChange={this.changeInfo}></input>
                    
                </div>

            :   //Preview screen
                <div className="preview-personal-container">
                    <h3 className="preview-section-header">
                        <label>{this.state.firstName}</label>&nbsp;
                        <label>{this.state.lastName}</label>
                    </h3>
                    <div className="contact-telephone">
                        <label className="contact">Telephone: </label>
                        <label className="contact-detail">{this.state.telephone}</label>                        
                    </div>
                    <div className="contact-email">
                        <label className="contact">Email: </label>
                        <label className="contact-detail">{this.state.email}</label>                        
                    </div>
                    <div className="grey-line"></div>                    
                </div>
        );
    }
}

export default PersonalInfo;