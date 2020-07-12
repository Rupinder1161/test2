import React from 'react';
import './App.css';
import Front from './components/front'
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Cart from './components/Cart'

import ItemCart from './components/ItemCart'
function App() {
  return (

    <Router>
    <div className="App">
    <Switch>
    <Route path="/" exact component={Front} />
    <Route path="/Cart" exact component={Cart} />
    <Route path="/Login" exact component={Cart} />
    <Route path="/Add Your Menu" exact component={Cart} />
    <Route path="/cool" component={ItemCart}></Route>
    </Switch>
    </div>
    </Router>
    
    // <div className="App" > 
    //     <Front/>  
    // </div>
  );
}

export default App;
