import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Subcategory from './components/Subcategory';
import Product from './components/Product';
import Category from './components/Category';
import Enquiry from './components/Enquiry';
import Home from './components/Home';
import './form.css';
import './App.css';

ReactDOM.render( <Router>
    
    <Route path="/Subcategory" component={Subcategory}/>
    <Route path="/Product" component={Product}/>
    <Route path="/Category" component={Category}/>
    <Route path="/Enquiry" component={Enquiry}/>
    <Route path="/Home" component={Home}/>

    

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
