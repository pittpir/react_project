import React, { Component } from 'react'
import { Item, Container } from 'semantic-ui-react'


export default class CharacterList extends Component {

    render() {
        const characterList = this.props.characters.map((item, index) => {
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
        		{characterList}
			</Item.Group>
        	</Container>


        )
    }




};
