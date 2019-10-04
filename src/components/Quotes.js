import React from 'react';
import axios from 'axios';

export default class CreatePOs extends React.Component {
    state = {
        quotedata: {}
        
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Quote').then( results => {
            this.setState({quotedata: results});
        });
        
    }
    
    render() {
            var quoteData= this.state.quotedata.data;
            quoteData = quoteData ? quoteData : [];

        return (
            <table border="1">
            <h1> Quote Details</h1>
            <tr>
                <td>id</td>
                <td>Rate per Kg</td>
                <td>Value</td>
                <td>Loading Charges</td>
                <td>Transportation</td>
                <td>Taxable Value</td>
                <td>GST @ 18%</td>
                <td>Total Estimation</td>
            </tr>
            {quoteData.map( (quote) => {
                return (
                
                <tr key={quote.id}>
                    <td>{quote.id}</td>
                    <td>{quote.rateperkg}</td>
                    <td>{quote.value}</td>
                    <td>{quote.loadingcharges}</td>
                    <td>{quote.transportation}</td>
                    <td>{quote.taxablevalue}</td>
                    <td>{quote.gst}</td>
                    <td>{quote.totalestimation}</td>
                    
                 
                </tr>
                );

            })
            
            }
              <button  > <a href="http://localhost:3001/Quote">
                Add Purchase Order
                </a> </button>

            </table>
            
        )
    }
}



