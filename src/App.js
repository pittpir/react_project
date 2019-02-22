import React, { Component } from 'react';
import './App.css';
import Main from './Container/Main'
import { Card, Icon, Image } from 'semantic-ui-react'



export default class App extends Component {
  render() {
    return (
      <div className="App">    
        <Main />
      </div>
    );
  }
}



/*
<Router>
</Router>
 <hr />
         <Route exact path="/" component={Home} />
          <Route path="/Ships" component={Ships} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />  
*/