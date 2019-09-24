import React, {Component} from 'react';
import axios from "axios";

const initialState = {
  code: "",
  name: "",
  nameError: "",
  idError: "",
  codeError: "",
  common_name: "",
  common_nameError: "",
  gstn: "",
  gstnError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let codeError = "";
    let nameError = "";
    let common_nameError = "";
    let gstnError = "";
    
    
    
    
     if (!this.state.code) {
       codeError = "Code cannot be blank";
     }
    
     if (!this.state.name) {
       nameError = "name cannot be blank";
     }
    
     if (!this.state.common_name) {
       common_nameError = "Common name cannot be blank";
     }
    
     if (!this.state.gstn) {
       gstnError = "GSTN cannot be blank";
     }

    if ( nameError || codeError || common_nameError || gstnError) {
       this.setState({ nameError,codeError,common_nameError,gstnError });
       return false;
     }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      axios.post('http://localhost:5000/addCategory', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h1>Enquiry Form</h1>
         <div> 
           <label> Address:<input  type="text" className="input"/></label>
         </div>
         <div>
           <label>phone no.:<input  type="number" className="input"/></label>
           </div>
           <div>
           <label>EmailId:<input  type="Email" className="input"/></label>
           </div>
         <div>
           <label>Party Name:<input  type="text" className="input"/></label>
           </div>
         <div>
           <label>Party Address :<input  type="text" className="input"/></label>
           </div>
         <div>
           <label>Qtn no.:<input  type="number" className="input"/></label>
           </div>
         <div>
           <label>Date:<input  type="date" className="input"/></label>
           </div>
         <div >
           <label>Category: 
           <select classname="teju">
            <option >Channel</option>
            <option >Joist Beam</option>
          </select>
             
             </label>
           </div>
         <div >
           <label >Subcategory:
           <select >
            <option >Re Rolled</option>
            <option >I Beam</option>
          </select>
             
           </label>
           </div>
         <div>
           <label>Size:<input  type="number" className="input"/></label>
           </div>
         <div>
           <label>Quantity (Nos.)<input  type="number" className="input"/></label>
           </div>
         <div>
           <label>Quantity (Kgs)<input  type="number" className="input"/></label>
           </div>
         <div>
           <label>Total:<input  type="number" className="input"/></label>
           </div>
         


        <button type="submit"  className="button" >Submit</button>
      </form>
      </div>
    );
  }
}


