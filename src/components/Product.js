import React  from 'react';
import axios from 'axios';

const initialState = {
  
    code: "",
    name: "",
    gstn: "",
    flange1: "",
    flange2: "",
    flange3: "",
    weight_per_meter: "",
    thickness: "",
    width: "",
    length: "",
    description: "",
    common_name: "",
    grade_specs: "",
    brandname: "",
    outer_diameter: "",
    total: "",
 
    
    codeError: "",
    nameError: "",
    gstnError: "",
    flange1Error: "",
    flange2Error: "",
    flange3Error: "",
    weight_per_meterError: "",
    thicknessError: "",
    widthError: "",
    lengthError: "",
    descriptionError: "",
    common_nameError: "",
    grade_specsError: "",
    brandnameError: "",
    outer_diameterError: "",
    totalError: "",

 
 
 };
 
 export default class Product extends React.Component {
  state = { initialState: {},categorydata: [] , subcategorydata: [] }
  
  componentDidMount() {
    
    axios.get('http://localhost:5000/Product').then(result => this.state.productdata); 
    axios.get('http://localhost:5000/Category')
    .then(result => this.setState({categorydata: result.data})); 

    
  }


   handleChange = event => {
     const isCheckbox = event.target.type === "checkbox";
     this.setState({
       [event.target.name]: isCheckbox
         ? event.target.checked
         : event.target.value
     });
   };
 
   validate = () => {
     
 
     
     let codeError= "";
     let nameError= "";
     let gstnError= "";
     let flange1Error= "";
     let flange2Error= "";
     let flange3Error= "";
     let weight_per_meterError= "";
     let thicknessError= "";
     let widthError= "";
     let lengthError= "";
     let descriptionError= "";
     let common_nameError= "";
     let  grade_specsError= "";
     let brandnameError= "";
     let outer_diameterError= "";
     let totalError= "";

     
     if (!this.state.code) {
       codeError = "code cannot be blank";
     }
 
     if (!this.state.name) {
       nameError = "name cannot be blank";
     }
 
     if (!this.state.gstn) {
       gstnError = "GSTN cannot be blank";
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
 
     if (!this.state.common_name) {
       common_nameError = "Common_name cannot be blank";
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

     if (!this.state.total) {
      totalError = "total cannot be blank";
    }
 
 
 
 
     
     if (codeError || nameError || gstnError || flange1Error || flange2Error || flange3Error||
        weight_per_meterError || thicknessError || widthError || lengthError || descriptionError || 
        common_nameError || grade_specsError || brandnameError || outer_diameterError || totalError) {
       this.setState({ codeError , nameError , gstnError , flange1Error , flange2Error , flange3Error ,
         weight_per_meterError , thicknessError , widthError , lengthError , descriptionError , 
         common_nameError , grade_specsError , brandnameError , outer_diameterError , totalError });
       return false;
     }
 
     return true;
   };
 
   handleSubmit = event => {
     event.preventDefault();
     const isValid = this.validate();
     axios.post('http://localhost:5000/addProduct', this.state)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
     if (isValid) {
       console.log(this.state);
       // clear form
       this.setState(initialState);
     }
   };

   handleSubcat = event => {
    axios.get('http://localhost:5000/Subcat?categoryId='+event.target.value )
    .then(result => this.setState({subcategorydata: result.data})); 
    //console.log(result);
    console.log(this.state.subcategorydata);
      
    };

 
   render() {
     return (
      
       <div className="container">
       <form onSubmit={this.handleSubmit}>
         <h1>Product Details</h1>
         
 
         <div >
           code:<input
             name="code"
             //type= "number"
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
             //type= "text"
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
           GSTN:<input
             name="gstn"
            // type= "text"
             placeholder="gstn"
             value={this.state.gstn}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.gstnError}
           </div>
         </div>
 
         <div >
           Flange1:<input
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
           Flange2:<input
             name="flange2"
             type= "number"
             placeholder="flange2"
             value={this.state.flange2}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.flange2Error}
           </div>
         </div>
 
         <div >
         Flange3:<input
             name="flange3"
             type= "number"
             placeholder="flange3"
             value={this.state.flange3}
             onChange={this.handleChange}
             className="input"
           />
           <div style={{ fontSize: 12, color: "red" }}>
             {this.state.flange3Error}
           </div>
         </div>
          
         <div >
         Weight_per_meter:<input
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
         Thickness:<input
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
         Width:<input
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
         Length:<input
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
         Description:<input
           name="description"
           type= "text"
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
       Common_name:<input
           name="common_name"
           type= "text"
           placeholder="common_name"
           value={this.state.common_name}
           onChange={this.handleChange}
           className="input"
         />
         <div style={{ fontSize: 12, color: "red" }}>
           {this.state.common_nameError}
         </div>
       </div>
        
       <div >
       Grade_specs:<input
           name="grade_specs"
           type= "text"
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
       Brandname:<input
           name="brandname"
           type= "text"
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
         Outer_diameter:<input
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

       <div >
         Total:<input
           name="total"
           type= "number"
           placeholder="total"
           value={this.state.total}
           onChange={this.handleChange}
           className="input"
         />
         <div style={{ fontSize: 12, color: "red" }}>
           {this.state.totalError}
         </div>
       </div>
             <div> Category:
             <select name="CategoryId" type="text" onChange={this.handleSubcat} value={this.state.CategoryId}>
               <option value=''>Select</option>
             {this.state.categorydata.length && this.state.categorydata.map( (category) => {
               //console.log(category);
                return (
                <option key={category.id} value={category.id} >{category.name}</option> );
             })}
            </select>
             </div>

             <div> Subcategory:
             <select name="SubcategoryId" type="text" onChange={this.handleChange} value={this.state.SubcategoryId}>
             <option value=''>Select</option>
             {this.state.subcategorydata.length && this.state.subcategorydata.map( (subcategory) => {
              // console.log(subcategorydata);
                return (
                <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option> );
             })}
            </select>
             </div>
 
         
 
 
 
 
         <button type="submit"  className="button" >Submit</button>
       </form>
       </div>
       
     );
   }
 }
 
 
 