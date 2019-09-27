import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
    state = {
        categoryData: {
            code: "" , name: "" , common_name: "" , gstn: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/').then( results => {
            this.setState({categoryData: results.data});
        });
    }
    
    render() {
        return (
            <div>
            {this.state.categoryData.map((data, index) => {
                return( 
                    <div key={data.id}>{data.name }  </div>

                  )
                })
            }
            </div>
        )
    }
}