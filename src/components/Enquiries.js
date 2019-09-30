import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router';

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
            <table border="1">
            <h1> Enquiry Details</h1>
            {enquiryData.map( (enquiry) => {
                return (
                <tr key={enquiry.id}>
                     <td> {enquiry.id}</td>
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
                    <td> <a href={`/CreatePO/${enquiry.id}`}>Purchase </a> </td>
                    <td> <a href={`/Quote/${enquiry.id}`}>Quote </a> </td>
                </tr>
                );

            })
            
            }
             <button  > <a href="http://localhost:3001/Enquiry" onclick="console.log('The link is clicked.'); return false">
                Add Enquiry
                </a> </button>

            </table>
            
        )
    }
}



