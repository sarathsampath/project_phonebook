import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import './App.css';
import Login from "./login"
import Get from "./get"
import Post from "./post"
import Update from "./update"
import Homepage from "./Homepage"
import PrivateRoute from "./ProtectedRoute"
import  My404Component from "./Error"
import Delete from "./Delete"
import verifyMail from './verifyMail';
import ResendOtp from './ResendOtp';
import upload from './upload'
const App=()=>
(
<div className="Routes">
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Login}  />
    <PrivateRoute path="/HomePage" exact component={Homepage}  />
    <PrivateRoute path="/users" exact component={Get}  /> 
    <PrivateRoute path="/update"  exact component={Update}  />
    <PrivateRoute path="/Delete"  exact component={Delete}  />
    <PrivateRoute path="/upload"  exact component={upload}  />
    <Route  path="/post" exact component={Post}  /> 
    <Route  path="/verifyMail" exact component={verifyMail}  /> 
    <Route  path="/Resend" exact component={ResendOtp}  /> 
    <Route path='*' exact={true} component={My404Component} />
    
       </Switch>
  </BrowserRouter>
 

</div>
)
export default App;
