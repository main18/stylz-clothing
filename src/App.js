import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage.component';


const Hats = (props) => {
  console.log(props);
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return ( 
    <div className="">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
