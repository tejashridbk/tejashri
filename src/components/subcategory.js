import React, {Component} from 'react';
import axios from 'axios';
const initialState = {
  name: "",
  id: "",
  Code: "",
  nameError: "",
  idError: "",
  CodeError: "",
  Common_name: "",
  Common_nameError: "",
  GSTN: "",
  GSTNError: "",
  Category_id: "",
  Category_idError: ""

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
    let nameError = "";
    let idError = "";
    let CodeError = "";
    let Common_nameError = "";
    let GSTNError = "";
    let Category_idError ="";
    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.id) {
      idError = "id cannot be blank";
    }

    if (!this.state.Code) {
      CodeError = "Code cannot be blank";
    }

    if (!this.state.Common_name) {
      Common_nameError = "Common name cannot be blank";
    }

    if (!this.state.GSTN) {
      GSTNError = "GSTN cannot be blank";
    }

    if (!this.state.Category_id) {
        Category_idError = "Cateogry id  cannot be blank";
      }

    if (idError || nameError || CodeError || Common_nameError || GSTNError || Category_idError) {
      this.setState({ idError, nameError,CodeError,Common_nameError,GSTNError,Category_idError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    axios.post('/addSubCategory', this.state)
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
          id:<input
            type="number"
            name="id"
            placeholder="id"
            value={this.state.id}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.idError}
          </div>
        </div>
        <div>
          Code<input
            type="number"
            name="Code"
            placeholder="Code"
            value={this.state.Code}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.CodeError}
          </div>
        </div>

        <div>
          Category_id<input
            type="number"
            name="Category_id"
            placeholder="Category_id"
            value={this.state.Category_id}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.Category_idError}
          </div>
        </div>

        <div>
          Commonly Used Name:<input
            type="text"
            name="Common_name"
            placeholder="Common_name"
            value={this.state.Common_name}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.Common_nameError}
          </div>
        </div>
        <div>
          GSTN:<input
            
            name="GSTN"
            placeholder="GSTN"
            value={this.state.GSTN}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.GSTNError}
          </div>
        </div>
        <button type="submit"  className="button" >Submit</button>
      </form>
      </div>
    );
  }
}


