import React, { Component } from 'react';
//import {Login, PrivateRoute, fakeAuth, AuthButton  } from './Routes/Login'
//import Ships from './Routes/Ships'
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Routes from "../Routes/Routes";
import vader from '../vader.png';
import { fakeAuth  } from '../Routes/Login2'
import { Card, Icon, Image } from 'semantic-ui-react'



export default class Main extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      logged: false,
	      out: false
	    } 
	}

	login = () => {
	    this.setState({
	      logged: true 
	    })
	  }

	handleLogout = async event => {
	  //await Auth.signOut();
	  fakeAuth.signout();
	  this.setState({
	      out: true
	    })
	}


    render() {
		const childProps = {
		  logged: this.state.logged,
		  login: this.login
		};

		if (this.state.out === true) {
	   		return <Main />;
		}

	    return (	
			<div>
	  			<Navbar expand="lg" bg="primary" variant="dark" >
	 				<LinkContainer to="/">
						<Navbar.Brand>
	      					<img
	        					alt=""
	        					src={ vader }
						        width="30"
						        height="30"
						        className="d-inline-block align-top"
	      					/>
	      					{' SWGOH '}
	    				</Navbar.Brand>
					</LinkContainer>
	    
	 			<Navbar.Toggle aria-controls="basic-navbar-nav" />
	  			<Navbar.Collapse id="basic-navbar-nav">
	    			<Nav className="mr-auto">
	      				<LinkContainer to="/characters">
	      					<Nav.Link>Characters</Nav.Link>
	      				</LinkContainer>
	      				<LinkContainer to="/ships">
	      					<Nav.Link>Ships</Nav.Link>
	      				</LinkContainer>
	       				<LinkContainer to="/stats">
	      					<Nav.Link>Personal Stats</Nav.Link>
	      				</LinkContainer>
	      		
	      				{this.state.logged ? 
	      					<Nav.Link>
	              				<NavItem onClick={this.handleLogout}>Logout</NavItem>
	              			</Nav.Link>
	  						: <div>
	      					<LinkContainer to="/login">
	      						<Nav.Link>Login</Nav.Link>
	      					</LinkContainer>
	    					</div>
						}
	    			</Nav>
	    		</Navbar.Collapse>
	  			</Navbar>			
				<Routes childProps={childProps}/>

			</div>
	    );
	}
}






/*


<LinkContainer to="/login">
      					<Nav.Link>Login</Nav.Link>
      				</LinkContainer>







<Nav>
				<LinkContainer to="/">
					<Nav.Link>Home</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/Characters">
					<Nav.Link>Characters</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/Ships">
				 	<Nav.Link>Ships</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/Stats">
					<Nav.Link>Personal Stats</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/Login">
					<Nav.Link>Login</Nav.Link>
				</LinkContainer>
			</Nav>



<Nav>
                <LinkContainer to="/">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/news">
                    <NavItem>News</NavItem>
                </LinkContainer>
                <LinkContainer to="/news">
                    <NavItem>Bio</NavItem>
                </LinkContainer>
            </Nav>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>{' '}
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>{' '}
            </li>
            <li>
              <Link to="/procedures">Procedures</Link>
            </li>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>

          <hr />
          <AuthButton />
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>

      */