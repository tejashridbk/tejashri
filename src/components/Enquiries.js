import React from 'react';
import axios from 'axios';

  

export default class Enquiries extends React.Component {
    state = {
        enquirydata: {}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Enquiry').then( results => {
            this.setState({enquirydata: results});
        });
    }

    
    render() {
            var enquiryData= this.state.enquirydata.data;
            enquiryData = enquiryData ? enquiryData : [];

        return (
                 
            <body>
            <table border="1" >
            <h1> Enquiry Details</h1>
            <tr>
                
                <td>Addrress</td>
                <td>Phone</td>
                <td>Emailid</td>
                <td>Party Name</td>
                <td>Party Addrress</td>
                <td>Quantity</td>
                <td>Date</td>
                <td>Category</td>
                <td>Subcategory</td>
                <td>Size</td>
                <td>Quantity (in numbers)</td>
                <td>Quantity (in kg)</td>
                <td>Total</td>
                
                
            </tr>
            {enquiryData.map( (enquiry) => {
                return (
                <tr key={enquiry.id}>
                    
                    <td>{enquiry.address} </td>
                    <td>{enquiry.phone}</td>
                    <td>{enquiry.emailid}</td>
                    <td>{enquiry.partyname}</td>
                    <td>{enquiry.partyaddress}</td>
                    <td>{enquiry.quantity}</td>
                    <td>{enquiry.date}</td>
                    <td>{enquiry.category}</td>
                    <td>{enquiry.subcategory}</td>
                    <td>{enquiry.size}</td>
                    <td>{enquiry.quantity_no}</td>
                    <td>{enquiry.quantity_kg}</td>
                    <td>{enquiry.total}</td>
                    
                    <td> <a href={`/Quote/${enquiry.id}`}>Quote </a> </td>
                    <td> <a href={`/CreatePO/${enquiry.id}`}>Purchase </a> </td>
                </tr>
                );

            })
            
            }
             <button  > <a href="http://localhost:3001/Enquiry" >
                Add Enquiry
                </a> </button>

            </table>
            </body> 
            
        )
    }
}



