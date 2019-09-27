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

export default class ValiationForm extends Component {
  state = {initialState: {} } 


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

  render() {
    return (
      //<body className="body">
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
         <div >
           category: 
           <select name="category" type="text" onChange={this.handleChange} value={this.state.category} >
            <option >Channel</option>
            <option >Joist Beam</option>
          </select>
             
           </div>
         <div >
           subcategory:
           <select name="subcategory" type="text" onChange={this.handleChange} value={this.state.subcategory} >
            <option >Re Rolled</option>
            <option >I Beam</option>
          </select>
             
           
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
         


        <button type="submit"  className="button" >Submit</button>
      </form>
      </div>
      //</body>
    );
  }
}


