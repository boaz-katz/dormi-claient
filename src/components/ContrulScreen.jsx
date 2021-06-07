import React,{ useState} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkform from"./checkform"
import  Nwerequest from"./new_request"
import User from "./user"
import Menu from"./Menu"
import ListOfreq from"./ListOfreq"
const ContrulScreen =()=> {



  return (
    <Router>
       <Menu />
 <Switch>
          <Route path="Users">
          <User/>
          </Route>
          <Route path="/Checkform">
          <Checkform/>
          </Route>
          <Route exact path="/">
         < Nwerequest/>
          </Route>
          <Route  path="/ListOfreq">
         <ListOfreq/>
          </Route>
        
</Switch>
  
    </Router>
  );
}

export default ContrulScreen;
