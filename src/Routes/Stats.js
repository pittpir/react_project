import React, { Component } from 'react';
import StatsList from './StatsList'
//import { Card, Icon, Image } from 'semantic-ui-react'


export default class Stats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stats: []
    }
  }

  getStats = async () => {
    try {
      let code = 883925439;

      const options = {
          method: 'get',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },          
          
      } 
//      let url = `https://swgoh.gg/api/player/${code}/?format=json`
//      let req = new Request(url); 
      let returnData = "";
      returnData = await fetch('/swgoh/stats');
      //returnData = await fetch(`https://swgoh.gg/api/ships/?format=json`, { mode: 'no-cors'});
      //const response = await (fetch(req));
      //const data = await response.json();
      const data = await returnData.json();
      console.log(data.data);
      data.data.rank2 = data.data.fleet_arena.rank
      this.setState({stats: data.data});
     

      //this.setState({quakes: data.features});
      console.log(data.data.fleet_arena.rank)
      //console.log(...data.features[0].geometry.coordinates)
      //greatPlaceCoords: {lat: 31.2682, lng: -96.74295}

      /*
      data.features.map((item,index) => {
        //console.log(item.geometry.coordinates)
        obj = {
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0]
        }
        return array.push(obj)
        }
      );

*/

    } catch(err) {
      console.log("Error found", err.name, err.message)

    }

  }

  componentDidMount(){
    this.getStats()
  } 


  render() {
    return (
      <div className="Home">
        <h1>Star Wars Galaxy of Heroes Personal Stats</h1>
        <p>
          Personal Stats...
        </p>
        <StatsList stats={this.state.stats} />
      </div>
    );
  }
}

/*


*/