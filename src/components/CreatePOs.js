import React from 'react';
import axios from 'axios';

export default class CreatePOs extends React.Component {
    state = {
        purchasedata: {}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/CreatePO').then( results => {
            this.setState({purchasedata: results});
        });
    }
    
    render() {
            var purchaseData= this.state.purchasedata.data;
            purchaseData = purchaseData ? purchaseData : [];

        return (
            <table border="1" align="center" >
            <h1> Purchase Order Details</h1>
            <tr>
                    <td>id</td>
                    <td>Loading Charges</td>
                    <td>Transportation</td>
                    <td>Taxable Value</td>
                    <td>GST @ 18% </td>
                    <td>Total Estimation</td>
                    

            </tr>
            {purchaseData.map( (createPO) => {
                return (
                
                <tr key={createPO.id}>
                     <td>{createPO.id}</td>
                    <td>{createPO.loadingcharges}</td>
                    <td>{createPO.transportation}</td>
                    <td>{createPO.taxablevalue}</td>
                    <td>{createPO.gst}</td>
                    <td>{createPO.totalestimation}</td>


                </tr>
                );

            })
            
            }
              <button  > <a href="http://localhost:3001/CreatePO" >
                Add Purchase Order
                </a> </button>

            </table>
            
        )
    }
}



