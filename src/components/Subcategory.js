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
  categoryId: "",
  categoryIdError: ""

};

export default class Subcategory extends Component {
  state = { initialState: {},
}
  componentDidMount() {
    
    axios.get('http://localhost:5000/Subcategory').then(result => this.state.subcategorydata);   
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
    
    let codeError = "";
    let nameError = "";
    let common_nameError = "";
    let gstnError = "";
    let categoryIdError ="";
    
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

    if (!this.state.categoryId) {
        categoryIdError = "Cateogryids  cannot be blank";
      }

    if (  codeError || nameError || common_nameError || gstnError || categoryIdError) {
      this.setState({ codeError,nameError,common_nameError,gstnError,categoryIdError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    axios.post('http://localhost:5000/addSubcategory', this.state)
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
            //type="number"
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
          Commonly Used Name:<input
            //type="text"
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
            //type="text"
            placeholder="GSTN"
            value={this.state.gstn}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.gstnError}
          </div>

          
        <div>
          CategoryId<input
            type="number"
            name="categoryId"
            placeholder="categoryId"
            value={this.state.categoryId}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.categoryIdError}
          </div>
        </div>
        </div>
        <button type="submit"  className="button" >Submit</button>
      </form>
      </div>
    );
  }
}


