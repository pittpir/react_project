import React, { Component } from 'react';
import CharacterList from './CharacterList'
import { Form, Checkbox, Grid, Container } from 'semantic-ui-react'

export default class Characters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      radio_value: '',
      saved_character_list: [],
    }


  }

  getShips = async () => {
    try {
      const options = {
          method: 'get',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },              
      } 
//      let url = `https://swgoh.gg/api/player/${code}/?format=json`
//      let req = new Request(url); 
      let returnData = "";
      returnData = await fetch('/swgoh/characters');
      //returnData = await fetch(`https://swgoh.gg/api/ships/?format=json`, { mode: 'no-cors'});
      //const response = await (fetch(req));
      //const data = await response.json();
      const data = await returnData.json();
      //console.log(data);
      this.setState({characters: data, saved_character_list: data});
     

      //this.setState({quakes: data.features});
      //console.log(data.features[0].geometry.coordinates)
      //console.log(...data.features[0].geometry.coordinates)
      //greatPlaceCoords: {lat: 31.2682, lng: -96.74295}

/*      
      data.map((item,index) => {
        console.log(item.image)
        }
      );
*/


    } catch(err) {
      console.log("Error found", err.name, err.message)

    }

  }

  componentDidMount(){
    this.getShips()
  } 


/*
handleSortLight = (event) => {
  //console.log("kkkkkkkkkkkkkkkkkkkkk")
  let data = this.state.characters;
  let sorted_data = [];
  //console.log(data)

sorted_data = data.filter( (item,index) => { 
    if (item.alignment === 'Light Side') {
      return item
    }


    })

//console.log(sorted_data)
this.setState({characters: sorted_data});

}

handleSortDark = (event) => {
  //console.log("kkkkkkkkkkkkkkkkkkkkk")
  let data = this.state.characters;
  let sorted_data = [];
  //console.log(data)

sorted_data = data.filter( (item,index) => { 
    if (item.alignment === 'Dark Side') {
      return item
    }


    })

//console.log(sorted_data)
this.setState({characters: sorted_data});

}

*/

handleSort = (event, {value}) => {
  //console.log("kkkkkkkkkkkkkkkkkkkkk")
  let data = this.state.saved_character_list;
  let sorted_data = [];
  //console.log(value)

  if (value === 'all') {
    this.setState({characters: this.state.saved_character_list, radio_value: value});
    return
  }
  
  //console.log(value)
  sorted_data = data.filter( (item,index) => { 
    if (item.alignment === value) {
      return item
    }
  })

  //console.log(sorted_data)
  this.setState({characters: sorted_data, radio_value: value});

}




  render() {
    return (
      <div className="Characters">
        <h1>SWGOH Characters</h1>
        <p>
          List of Characters below...
        </p>
         <Container style={{ margin: 10, width: 500 }}>
            <Grid >
            <Grid.Row >
              <Grid.Column >

<Form>
        <Form.Field>
          Selected value: <b>{this.state.radio_value}</b>
        </Form.Field>

        <Form.Group widths={'equal'}>
        <Form.Field >
          <Checkbox
            radio
            defaultChecked
            label='Select All'
            name='checkboxRadioGroup'
            value='all'
            checked={this.state.radio_value === 'all'}
            onChange={this.handleSort}
          />
        </Form.Field>
        <Form.Field >
          <Checkbox
            radio
            label='Only Light Side'
            name='checkboxRadioGroup'
            value='Light Side'
            checked={this.state.radio_value === 'Light Side'}
            onChange={this.handleSort}
          />
        </Form.Field>
                <Form.Field>
          <Checkbox
            radio
            label='Only Dark Side'
            name='checkboxRadioGroup'
            value='Dark Side'
            checked={this.state.radio_value === 'Dark Side'}
            onChange={this.handleSort}
          />
        </Form.Field>
        </Form.Group>
        </Form>
          </Grid.Column>
  </Grid.Row>
  </Grid>
         </Container>   
      



        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

