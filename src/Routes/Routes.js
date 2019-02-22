import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Ships from "./Ships";
import Characters from "./Characters";
import Stats from "./Stats";
//import Login from "./Login2";
import NotFound from "./NotFound";
//import Login from "./Login";
import {Login, PrivateRoute, PrivateRouteB  } from './Login2'
import { Card, Icon, Image } from 'semantic-ui-react'


export default ( {childProps} ) =>
  
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/ships" component={Ships} />
    <Route path="/characters" component={Characters} />
    <PrivateRouteB path="/login" component={Login} props={childProps} />
    <PrivateRoute path="/stats" component={Stats} props={childProps} />
    <Route component={NotFound} />  
  </Switch>;
