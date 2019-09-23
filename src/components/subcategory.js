import React, {Component} from 'react';
import axios from 'axios';
const initialState = {
  code: "",
  name: "",
  nameError: "",
  
  codeError: "",
  common_name: "",
  common_nameError: "",
  gstn: "",
  gstnError: "",
  category_id: "",
  category_idError: ""

};

export default class ValiationForm extends Component {
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
    let category_idError ="";
    
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

    if (!this.state.category_id) {
        category_idError = "Cateogry id  cannot be blank";
      }

    if (  codeError || nameError || common_nameError || gstnError || category_idError) {
      this.setState({ codeError,nameError,common_nameError,gstnError,category_idError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    axios.post('/http://localhost:5000/addCategory', this.state)
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

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h1>Subcategory Details</h1>
        <div>
          Code<input
            type="number"
            name="code"
            placeholder="code"
            value={this.state.code}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.codeError}
          </div>
        </div>
        <div>
          Name:<input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        

        <div>
          Category_id<input
            type="number"
            name="category_id"
            placeholder="category_id"
            value={this.state.category_id}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.category_idError}
          </div>
        </div>

        <div>
          Commonly Used Name:<input
            type="text"
            name="common_name"
            placeholder="common_name"
            value={this.state.common_name}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.common_nameError}
          </div>
        </div>
        <div>
          GSTN:<input
            
            name="gstn"
            placeholder="GSTN"
            value={this.state.gstn}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.gstnError}
          </div>
        </div>
        <button type="submit"  className="button" >Submit</button>
      </form>
      </div>
    );
  }
}


