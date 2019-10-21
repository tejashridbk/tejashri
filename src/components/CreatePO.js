import React, {Component} from 'react';
import axios from "axios";

const initialState = {
 
  
  loadingcharges: "",
  transportation: "",
  taxablevalue: "",
  gst: "",
  totalestimation: ""
};

export default class CreatePO extends Component {
  state = {enquirydata: {}, purchasedata: {} } 

  componentDidMount() {
      console.log(this.props.match.params);
    axios.get('http://localhost:5000/getEnquiry?enquiryId='+this.props.match.params.enquiryId )
    .then(result => this.setState({enquirydata: result.data})); 

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
      axios.post('http://localhost:5000/addCreatePO', this.state)
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
      console.log(this.state);
      return (
        <body className="body">
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h1>Purchase Order</h1>
        <div> Address: <label>{this.state.enquirydata && this.state.enquirydata.address}</label></div>
        <div> Phone: <label>{this.state.enquirydata && this.state.enquirydata.phone}</label></div>
        <div> Emailid: <label>{this.state.enquirydata && this.state.enquirydata.emailid}</label></div>
        <div> Party Name: <label>{this.state.enquirydata && this.state.enquirydata.partyname}</label></div>
        <div> Party Address : <label>{this.state.enquirydata && this.state.enquirydata.partyaddress}</label></div>
        <div> Quantity: <label>{this.state.enquirydata && this.state.enquirydata.quantity}</label></div>
        <div> Date: <label>{this.state.enquirydata && this.state.enquirydata.date}</label></div>
        <div> Category: <label>{this.state.enquirydata && this.state.enquirydata.category}</label></div>
        <div> Subcategory: <label>{this.state.enquirydata && this.state.enquirydata.subcategory}</label></div>
        <div> Size: <label>{this.state.enquirydata && this.state.enquirydata.size}</label></div>
        <div> Quantity(in No.): <label>{this.state.enquirydata && this.state.enquirydata.quantity_no}</label></div>
        <div> Quantity(in Kg.): <label>{this.state.enquirydata && this.state.enquirydata.address}</label></div>
        <div> Total: <label>{this.state.enquirydata && this.state.enquirydata.total}</label></div>


         <div> 
           Loading Charges:<input name="loadingcharges" type="number" className="input" value={this.state.loadingcharges}
            onChange={this.handleChange}/>
         </div>
         <div>
           Transportation:<input name="transportation" type="number" className="input" value={this.state.transportation}
            onChange={this.handleChange}/>
           </div>
           <div>
           Taxable Value:<input name="taxablevalue" type="number" className="input" value={this.state.taxablevalue}
            onChange={this.handleChange}/>
           </div>
         <div>
           GST @ 18%:<input name="gst" type="number" className="input" value={this.state.gst}
            onChange={this.handleChange}/>
           </div>
         <div>
           Total Estimation Value:<input name="totalestimation" type="number" className="input" value={this.state.totalestimation}
            onChange={this.handleChange}/>
           </div>
         


        <button type="submit"  className="button" >Submit</button>
      </form>
      </div>
      </body>
    );
    }
  }



