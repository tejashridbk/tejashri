import React from 'react';
import axios from 'axios';

export default class Products extends React.Component {
    state = {
        productdata: {}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Product').then( results => {
            this.setState({productdata: results});
        });
    }
    
    render() {
            var productData= this.state.productdata.data;
            productData = productData ? productData : [];

        return (
            
            <table border="1">
            <h1> Product Details</h1>
            <tr>
                    <td>Code</td>
                    <td>Name</td>
                    <td>GSTN</td>
                    <td>flange1</td>
                    <td>flange2</td>
                    <td>flange3</td>
                    <td>Weight per meter</td>
                    <td>Thickness</td>
                    <td>Width</td>
                    <td>Length</td>
                    <td>Description</td>
                    <td>Common Name</td>
                    <td>Grade Specs.</td>
                    <td>Brandname</td>
                    <td>Outer Diameter</td>
                    <td>Total</td>
                    <td>Category</td>
                    <td>Subcategory</td>



            </tr>
            {productData.map( (product) => {
                return (
                
                <tr key={product.id}>
                     
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.gstn}</td>
                    <td>{product.flange1}</td>
                    <td>{product.flange2}</td>
                    <td>{product.flange3}</td>
                    <td>{product.weight_per_meter}</td>
                    <td>{product.thickness}</td>
                    <td>{product.width}</td>
                    <td>{product.length}</td>
                    <td>{product.description}</td>
                    <td>{product.common_name}</td>
                    <td>{product.grade_specs}</td>
                    <td>{product.brandname}</td>
                    <td>{product.outer_diameter}</td>
                    <td>{product.total}</td>

                    <td>{product.categoriesId}</td>
                    <td>{product.SubcategoryId}</td>

                </tr>);
            })
            }
             
             <button> <a href="http://localhost:3001/Product" onclick="console.log('The link is clicked'); return false">
                Add Product
                </a> </button>
             
            </table>
        )
    }
}



