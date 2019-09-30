import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Subcategory from './components/Subcategory';
import Product from './components/Product';
import Category from './components/Category';
import Enquiry from './components/Enquiry';
import Categories from './components/Categories';
import Subcategories from './components/Subcategories';
import Products from './components/Products';
import Enquiries from './components/Enquiries';
import CreatePO from './components/CreatePO';
import CreatePOs from './components/CreatePOs';

import Quote from './components/Quote';
import Quotes from './components/Quotes';


import './form.css';
import './App.css';

ReactDOM.render( 
<Router>
     <Route path="/Categories" component={Categories} />
     <Route path="/Subcategories" component={Subcategories} />
     <Route path="/Products" component={Products} />
     <Route path="/Enquiries" component={Enquiries} />
     <Route path="/CreatePOs" component={CreatePOs} />
     <Route path="/Quotes" component={Quotes} />

    <Route path="/Subcategory" component={Subcategory}/>
    <Route path="/Product" component={Product}/>
    <Route path="/Category" component={Category}/>
    <Route path="/Enquiry" component={Enquiry}/>
    <Route path="/CreatePO/:enquiryId"  component={CreatePO}/>
    <Route path="/Quote/:enquiryId"  component={Quote}/>


    

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA       

serviceWorker.unregister();
