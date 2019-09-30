import React from 'react';
import axios from 'axios';

export default class Subcategories extends React.Component {
    state = {
        subcategorydata: {}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Subcategory').then( results => {
            this.setState({subcategorydata: results});
        });
    }
    
    render() {
            var subcategoryData= this.state.subcategorydata.data;
            subcategoryData = subcategoryData ? subcategoryData : [];

        return (
            <table border="1px" className="table">
            <h1> Subcategory Details</h1>
            <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Common Name</td>
                <td>GSTN</td>

            </tr>
            {subcategoryData.map( (subcategory) => {
                return (
                
                <tr key={subcategory.id}>
                     
                    <td>{subcategory.code}</td>
                    <td>{subcategory.name}</td>
                    <td>{subcategory.common_name}</td>
                    <td>{subcategory.gstn}</td>
                </tr>);
            })}
             <button >
             <button  > <a href="http://localhost:3001/Subcategory" onclick="console.log('The link was clicked.'); return false">
                Add Subcategory
                </a> </button>
             </button>
            </table>
        )
    }
}



