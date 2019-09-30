import React from 'react';
import axios from 'axios';

export default class Categories extends React.Component {
    state = {
        categorydata: {}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Category').then( results => {
            this.setState({categorydata: results});
        });
    }
    
    render() {
            var categoryData= this.state.categorydata.data;
            categoryData = categoryData ? categoryData : [];

        return (
            <table border="1px">
            <h1> Category Details</h1>
            <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Common Name</td>
                <td>GSTN</td>

            </tr>

            {categoryData.map( (category) => {
                return (
               
                <tr key={category.id}>
                     
                    <td>{category.code}</td>
                    <td>{category.name}</td>
                    <td>{category.common_name}</td>
                    <td>{category.gstn}</td>
                </tr>
                );

            })
            
            }
             <button  > <a href="http://localhost:3001/Category" onclick="console.log('The link is clicked.'); return false">
                Add Category
                </a> </button>

            </table>
            
        )
    }
}



