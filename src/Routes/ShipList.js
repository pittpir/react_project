import React, { Component } from 'react'
import { Item, Container } from 'semantic-ui-react'


export default class ShipList extends Component {

    render() {
        const shipList = this.props.ships.map((item, index) => {
            return (
 
				  
				    <Item key={index}>
				      <Item.Image size='tiny' src={item.image} />
				      <Item.Content>
				        <Item.Header as='a'>{item.name}</Item.Header>
				        <Item.Meta>{item.description}</Item.Meta>   
				        <Item.Extra>Power: {item.power} / Role: {item.role} / Alignment: {item.alignment}</Item.Extra>
				      </Item.Content>
				    </Item>

				  
            )
        }) 


        return (
           
        	<Container style={{ margin: 50, width: 600 }}>
        	<Item.Group divided>
        		{shipList}
			</Item.Group>
        	</Container>


        )
    }




};


/*
               <li key={index}>
                    <h3>{item}</h3>
                </li>

                */