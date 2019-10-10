import React, {Component} from 'react';
import axios from "axios";

const initialState = {
  address: "",
  phone: "",
  emailid: "",
  partyname: "",
  partyaddress: "",
  quantity: "",
  date: "",
  category: "",
  subcategory: "",
  size: "",
  quantity_no: "",
  quantity_kg: "",
  total: ""
};

export default class Enquiry extends Component {
  state = {initialState: {}, categorydata: [] , subcategorydata: [] } 

  componentDidMount() {
    //axios.get('http://localhost:5000/Enquiry').then(result => this.state.enquirydata);
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
    //console.log(this.state);
  };

  
  handleSubmit = event => {
    event.preventDefault();
    //const isValid = this.validate();
    //if (isValid) {
      console.log(this.state);
      axios.post('http://localhost:5000/addEnquiry', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      // clear form
      this.setState(initialState);
    //}
  };

  handleSubcat = event => {
    axios.get('http://localhost:5000/Subcat?categoryId='+event.target.value )
    .then(result => this.setState({subcategorydata: result.data})); 
    //console.log(result);
    console.log(this.state.subcategorydata);
      
    };

  render() {
    console.log(this.state.subcategorydata);
    return (
      //<body className="body">
      <div className="body">
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h1>Enquiry Form</h1>
        
         <div> 
           address:<input name="address" type="text" className="input" value={this.state.address}
            onChange={this.handleChange}/>
         </div>
         <div>
           phone:<input name="phone" type="number" className="input" value={this.state.phone}
            onChange={this.handleChange}/>
           </div>
           <div>
           emailid:<input name="emailid" type="Email" className="input" value={this.state.emailid}
            onChange={this.handleChange}/>
           </div>
         <div>
           partyname:<input name="partyname" type="text" className="input" value={this.state.partyname}
            onChange={this.handleChange}/>
           </div>
         <div>
           partyaddress:<input name="partyaddress" type="text" className="input" value={this.state.partyaddress}
            onChange={this.handleChange}/>
           </div>
         <div>
           quantity:<input name="quantity" type="number" className="input" value={this.state.quantity}
            onChange={this.handleChange}/>
           </div>
         <div>
           date:<input name="date" type="date" className="input" value={this.state.date}
            onChange={this.handleChange}/>
           </div>
         
         <div>
           size:<input name="size" type="number" className="input" value={this.state.size}
            onChange={this.handleChange}/>
           </div>
         <div>
           quantity_no<input name="quantity_no"  type="number" className="input" value={this.state.quantity_no}
            onChange={this.handleChange}/>
           </div>
         <div>
           quantity_kg<input name="quantity_kg" type="number" className="input" value={this.state.quantity_kg}
            onChange={this.handleChange}/>
           </div>
         <div>
           total:<input name="total" type="number" className="input" value={this.state.total}
            onChange={this.handleChange}/>
           </div>
             <div> Category:
             <select name="categoriesId" type="text" onChange={this.handleSubcat} value={this.state.categoriesId}>
               <option value=''>Select</option>
             {this.state.categorydata.length && this.state.categorydata.map( (category) => {
               //console.log(category);
                return (
                <option key={category.id} value={category.id} >{category.name}</option> );
             })}
            </select>
             </div>

             <div> Subcategory:
             <select name="subcategory" type="text" onChange={this.handleChange} value={this.state.subcategory}>
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
      </div>
    );
  }
}


