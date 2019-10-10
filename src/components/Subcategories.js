import React from 'react';
import axios from 'axios';

export default class Subcategories extends React.Component {
    state = {
        subcategorydata: {} , categorydata: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Subcategory').then( results => {
            this.setState({subcategorydata: results});
            //console.log("results");

        });
        //console.log(categories);


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
                <td> Category</td>

            </tr>
           
            {subcategoryData.map( (subcategory) => {
                return (
               
                <tr key={subcategory.id}>
                     
                    <td>{subcategory.code}</td>
                    <td>{subcategory.name}</td>
                    <td>{subcategory.common_name}</td>
                    <td>{subcategory.gstn}</td>
                    <td>{subcategory.category.name}</td>
                   
                    
                </tr>);
            })}
             <button >
             <button  > <a href="http://localhost:3001/Subcategory" >
                Add Subcategory
                </a> </button>
             </button>
            </table>
        )
    }
}



