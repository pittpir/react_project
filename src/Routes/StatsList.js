import React, { Component } from 'react'
import { Card, Icon, Image, Feed, Grid, Table, Header, Divider } from 'semantic-ui-react'
import Media from 'react-bootstrap/Media'
import vader from '../vader.png';

export default class StatsList extends Component {
 


    render() {
        console.log(this.props.fleet_arena)
        return (
           

  <div> 
   
<Card centered >
    <Image src={vader} height='300' width='400'/>
    <Card.Content>
      <Card.Header>{this.props.stats.name}</Card.Header>
      <Card.Meta>Last Updated {this.props.stats.last_updated}</Card.Meta>
      <Card.Description>
      
        <Feed.Event>
          <Feed.Content>

          </Feed.Content>
        </Feed.Event>


      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Ally Code {this.props.stats.ally_code}
      </a>
    </Card.Content>
  </Card>
 <Divider hidden section />
<Card.Group itemsPerRow={5} stackable centered>
        <Card>
    <Card.Content header='Galatic Power' />
    <Card.Content description={this.props.stats.galactic_power} />
  </Card>
 
        <Card>
    <Card.Content header='Character Galatic Power' />
    <Card.Content description={this.props.stats.character_galactic_power} />
  </Card>

       <Card>
    <Card.Content header='Ship Galatic Power' />
    <Card.Content description={this.props.stats.ship_galactic_power} />
  </Card>
 
        <Card>
    <Card.Content header='Arena Rank' />
    <Card.Content description={this.props.stats.arena_rank} />
  </Card>
 
       <Card>
    <Card.Content header='Ship Arena Rank' />
    <Card.Content description={this.props.stats.rank2} />
  </Card>
         <Card>
    <Card.Content header='PVE battles Won' />
    <Card.Content description={this.props.stats.pve_battles_won} />
  </Card>
         <Card>
    <Card.Content header='PVP battles Won' />
    <Card.Content description={this.props.stats.pvp_battles_won} />
  </Card>
         <Card>
    <Card.Content header='Ship Battles Won' />
    <Card.Content description={this.props.stats.ship_battles_won} />
  </Card>
         <Card>
    <Card.Content header='Galatic War Won' />
    <Card.Content description={this.props.stats.galactic_war_won} />
  </Card>
           <Card>
    <Card.Content header='Guild Raid Won' />
    <Card.Content description={this.props.stats.guild_raid_won} />
  </Card>
</Card.Group>




 


</div>


        )
    }




};


/*
 <Table basic='very' celled collapsing textAlign="center">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Stat Name</Table.HeaderCell>
        <Table.HeaderCell>Stat Value</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Galatic Power
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{this.props.stats.galactic_power}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Character Galatic Power
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Ship Galatic Power
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Arena Rank
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Fleet Arena Rank
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Level
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              PVE Battles Won
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              PVP Battles Won
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Galatic War Won
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Guild Name
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

       <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Level
              <Header.Subheader>{this.props.stats.level}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>

      
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              PVE Battles Won
              <Header.Subheader>{this.props.stats.pve_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              PVP Battles Won
              <Header.Subheader>{this.props.stats.pvp_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Galatic War Won
              <Header.Subheader>{this.props.stats.galatic_war_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
            <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              PVP battles Won
              <Header.Subheader>{this.props.stats.pvp_battles_won}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>




            <Feed.Date content='Galatic Power' />
            <Feed.Summary>
              {this.props.stats.galactic_power}
            </Feed.Summary>
            <Feed.Date content='Galatic Power' />
            <Feed.Summary>
              {this.props.stats.galactic_power}
            </Feed.Summary>







    render() {
        const statsList = this.props.stats.map((item, index) => {
            return (
                <li key={index}>
                    <p>{item.data.power}
                    </p>
                </li>
            )
        })
        return (
            <ul>
                {statsList}
            </ul>
        )
    }




};
*/