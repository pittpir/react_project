import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Form, Container, Button, Grid, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import './Login2.css';

export default class Login extends Component {
  state = {
    redirectToReferrer: false,
    email: '',
      password: '',
      formErrors: {username: '', password: ''},
      emailError: false,
      passwordError: false
  };

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let error = 0;
    let emailValid = 0;
    let passwordValid = 0;
     
      if (! this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          error = 1;
          console.log("email error")
      }
          //fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        
      if (this.state.password.length < 6) {
          error = 1;
          console.log("password error")
      }
          //fieldValidationErrors.password = passwordValid ? '': ' is too short';
         
    if (error) {
      this.setState({
        emailError: true,
        passwordError: true
      })
    } else {  
      this.login()
      this.props.login()
    }
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer, email, password } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the Stats page at {from.pathname}</p>
         <Container>
            <Grid>
            <Grid.Row centered>
              <Grid.Column width={6}>

  <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              error={this.state.emailError}
              autoComplete="on"
              label="Email" 
              type="email" 
              placeholder='Email' 
              name="email" 
              value={email} 
              onChange={this.handleChange} />
              
            <Form.Input
              error={this.state.passwordError} 
              label="Password" 
              type="password" 
              placeholder='Password' 
              name="password" 
              value={password} 
              onChange={this.handleChange} />
 <Segment basic textAlign='center'>          
    <Button type='submit' color='blue'>Submit</Button></Segment>  
  </Form>
  </Grid.Column>
  </Grid.Row>
  </Grid>
         </Container>      
      </div>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRouteB = ({ component: Component, props:cProps, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...cProps} />} />

);

const PrivateRoute = ({ component: Component, props:cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} {...cProps}/>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export {
    PrivateRoute,
    PrivateRouteB,
    fakeAuth,
    Login
}





/*
 
         <Form onSubmit={this.handleSubmit}>
         
          
            <Form.Field> 
              fluid

              className="log2"
              error={this.state.emailError}
              autoComplete="on"
              label="Email" 
              type="email" 
              placeholder='Email' 
              name="email" 
              value={email} 
              onChange={this.handleChange} />
              </Form.Field> 
            <Form.Field>
              fluid
              className="log2"
              error={this.state.passwordError} 
              label="Password" 
              type="password" 
              placeholder='Password' 
              name="password" 
              value={password} 
              onChange={this.handleChange} />
              </Form.Field>
          
            <Form.Button type='submit' value='Submit'>Submit</Form.Button>
        </Form> 






const PrivateRoute = ({ component: Component, props:cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} {...cProps}/>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);





      <Form 
        onSubmit={this.handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group controlId="validationCustom01">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            autoFocus
            required
            //error={this.state.emailError}
            label="Email"  
            type="text" 
            placeholder="Enter"
            name="email"
            value={email}
            onChange={this.handleChange}
           />
          <Form.Text className="text-muted">
            The Empire will draft you by signing up!!!
          </Form.Text>
          <Form.Control.Feedback type="invalid">
                Please choose a username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            //error={this.state.passwordError} 
            label="Password" 
            type="text" 
            placeholder='Password' 
            name="password" 
            value={password} 
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit"
          block
        > Submit
        </Button>
      </Form>
*/
