import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import subcategory from './components/subcategory';
import product from './components/product';
import category from './components/category';

import './form.css';
import './App.css';


ReactDOM.render( <Router>
    
    <Route path="/subcategory" component={subcategory}/>
    <Route path="/product" component={product}/>
    <Route path="/category" component={category}/>


</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
