import React, { Component } from 'react';
import ShipList from './ShipList'
import { Form, Checkbox, Grid, Container } from 'semantic-ui-react'

export default class Ships extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ships: [],
      radio_value: '',
      saved_ships_list: []
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
      returnData = await fetch('/swgoh/ships');
      //returnData = await fetch(`https://swgoh.gg/api/ships/?format=json`, { mode: 'no-cors'});
      //const response = await (fetch(req));
      //const data = await response.json();
      const data = await returnData.json();
      //console.log(data);
      this.setState({ships: data, saved_ships_list: data });
     

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


handleSort = (event, {value}) => {
  //console.log("kkkkkkkkkkkkkkkkkkkkk")
  let data = this.state.saved_ships_list;
  let sorted_data = [];
  //console.log(value)

  if (value === 'all') {
    this.setState({ships: this.state.saved_ships_list, radio_value: value});
    return
  }
  
  //console.log(value)
  sorted_data = data.filter( (item,index) => { 
    if (item.alignment === value) {
      return item
    }
  })

  //console.log(sorted_data)
  this.setState({ships: sorted_data, radio_value: value});

}



  render() {
    return (
      <div className="Ships">
        <h1>SWGOH Ships</h1>
        <p>
          List of Ships below...
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


        <ShipList ships={this.state.ships} />
      </div>
    );
  }
}


//