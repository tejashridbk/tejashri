import React, {Component} from 'react';

const initialState = {
  


    id: "",
    code: "",
    name: "",
    GSTN: "",
    flange1: "",
    flange2: "",
    flange3: "",
    weight_per_meter: "",
    thickness: "",
    width: "",
    length: "",
    description: "",
    Common_name: "",
    grade_specs: "",
    brandname: "",
    outer_diameter: "",
 
    idError: "",
    codeError: "",
    nameError: "",
    GSTNError: "",
    flange1Error: "",
    flange2Error: "",
    flange3Error: "",
    weight_per_meterError: "",
    thicknessError: "",
    widthError: "",
    lengthError: "",
    descriptionError: "",
    Common_nameError: "",
    grade_specsError: "",
    brandnameError: "",
    outer_diameterError: ""
 
 
 
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
     
 
     let idError= "";
     let codeError= "";
     let nameError= "";
     let GSTNError= "";
     let flange1Error= "";
     let flange2Error= "";
     let flange3Error= "";
     let weight_per_meterError= "";
     let thicknessError= "";
     let widthError= "";
     let lengthError= "";
     let descriptionError= "";
     let Common_nameError= "";
     let  grade_specsError= "";
     let brandnameError= "";
     let outer_diameterError= "";
 
     if (!this.state.id) {
       idError = "id cannot be blank";
     }
 
     if (!this.state.code) {
       codeError = "code cannot be blank";
     }
 
     if (!this.state.name) {
       nameError = "name cannot be blank";
     }
 
     if (!this.state.GSTN) {
       GSTNError = "GSTN cannot be blank";
     }
 
 
     if (!this.state.flange1) {
       flange1Error = "flange1 cannot be blank";
     }
 
     if (!this.state.flange2) {
       flange2Error = "flange2 cannot be blank";
     }
 
     if (!this.state.flange3) {
       flange3Error = "flange3 cannot be blank";
     }
 
     if (!this.state.weight_per_meter) {
       weight_per_meterError = "weight_per_meter cannot be blank";
     }
     
     if (!this.state.thickness) {
       thicknessError = "thickness cannot be blank";
     }
 
     if (!this.state.width) {
       widthError = "width cannot be blank";
     }
 
     if (!this.state.length) {
       lengthError = "length cannot be blank";
     }
 
     if (!this.state.description) {
       descriptionError = "description cannot be blank";
     }
 
     if (!this.state.Common_name) {
       Common_nameError = "Common_name cannot be blank";
     }
 
     if (!this.state.grade_specs) {
       grade_specsError = "grade_specs cannot be blank";
     }
 
     if (!this.state.brandname) {
       brandnameError = "brandname cannot be blank";
     }
     
     if (!this.state.outer_diameter) {
       outer_diameterError = "outer_diameter cannot be blank";
     }
 
 
 
 
     
     if (idError || codeError || nameError || GSTNError || flange1Error || flange2Error || flange3Error||
        weight_per_meterError || thicknessError || widthError || lengthError || descriptionError || 
        Common_nameError || grade_specsError || brandnameError || outer_diameterError) {
       this.setState({ idError , codeError , nameError , GSTNError , flange1Error , flange2Error , flange3Error ,
         weight_per_meterError , thicknessError , widthError , lengthError , descriptionError , 
         Common_nameError , grade_specsError , brandnameError , outer_diameterError });
       return false;
     }
 
     return true;
   };
 
   handleSubmit = event => {
     event.preventDefault();
     const isValid = this.validate();
     if (isValid) {
       console.log(this.state);
       // clear form
       this.setState(initialState);
     }
   };
 
   render() {
     return (
       <div className="container">
       <form onSubmit={this.handleSubmit}>
         <h1>Product Details</h1>
         <div >
           Name:<input
             name="id"
             type= "number"
             placeholder="id"
             value={this.state.id}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.idError}
           </div>
         </div>
 
         <div >
           Name:<input
             name="code"
             type= "number"
             placeholder="code"
             value={this.state.code}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.codeError}
           </div>
         </div>
 
         <div >
           Name:<input
             name="name"
             type= "text"
             placeholder="name"
             value={this.state.name}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.nameError}
           </div>
         </div>
 
         <div >
           Name:<input
             name="GSTN"
             type= "number"
             placeholder="GSTN"
             value={this.state.id}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.GSTNError}
           </div>
         </div>
 
         <div >
           Name:<input
             name="flange1"
             type= "number"
             placeholder="flange1"
             value={this.state.flange1}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.flange1Error}
           </div>
         </div>
 
         <div >
           Name:<input
             name="flange2"
             type= "number"
             placeholder="flange2"
             value={this.state.flange1}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.flange2Error}
           </div>
         </div>
 
         <div >
           Name:<input
             name="flange3"
             type= "number"
             placeholder="flange3"
             value={this.state.flange1}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.flange3Error}
           </div>
         </div>
          
         <div >
           Name:<input
             name="weight_per_meter"
             type= "number"
             placeholder="weight_per_meter"
             value={this.state.weight_per_meter}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.weight_per_meterError}
           </div>
         </div>
         
         <div >
           Name:<input
             name="thickness"
             type= "number"
             placeholder="thickness"
             value={this.state.thickness}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.thicknessError}
           </div>
         </div>
 
         <div >
           Name:<input
             name="width"
             type= "number"
             placeholder="width"
             value={this.state.width}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.widthError}
           </div>
         </div>
         
         <div >
           Name:<input
             name="length"
             type= "number"
             placeholder="length"
             value={this.state.length}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.lengthError}
           </div>
         </div>
         
         <div >
         Name:<input
           name="description"
           type= "number"
           placeholder="description"
           value={this.state.description}
           onChange={this.handleChange}
           className="input"
         />
         <div style={{ fontSize: 12, color: "red" }}>
           {this.state.descriptionError}
         </div>
       </div>
         
       <div >
         Name:<input
           name="Common_name"
           type= "number"
           placeholder="Common_name"
           value={this.state.Common_name}
           onChange={this.handleChange}
           className="input"
         />
         <div style={{ fontSize: 12, color: "red" }}>
           {this.state.Common_nameError}
         </div>
       </div>
        
       <div >
         Name:<input
           name="grade_specs"
           type= "number"
           placeholder="grade_specs"
           value={this.state.grade_specs}
           onChange={this.handleChange}
           className="input"
         />
         <div style={{ fontSize: 12, color: "red" }}>
           {this.state.grade_specsError}
         </div>
       </div>
 
       <div >
         Name:<input
           name="brandname"
           type= "number"
           placeholder="brandname"
           value={this.state.brandname}
           onChange={this.handleChange}
           className="input"
         />
         <div style={{ fontSize: 12, color: "red" }}>
           {this.state.brandnameError}
         </div>
       </div>
 
       <div >
         Name:<input
           name="outer_diameter"
           type= "number"
           placeholder="outer_diameter"
           value={this.state.outer_diameter}
           onChange={this.handleChange}
           className="input"
         />
         <div style={{ fontSize: 12, color: "red" }}>
           {this.state.outer_diameterError}
         </div>
       </div>
 
 
         
 
 
 
 
         <button type="submit"  className="button" >Submit</button>
       </form>
       </div>
     );
   }
 }
 
 
 