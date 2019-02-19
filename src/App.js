import React, { Component } from 'react';
import { SoccerApi } from './models/soccer-api';
import './match.css';

const getCompetitionName = str => str.split(':')[1].trim();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount() {
    let socApi = new SoccerApi();
    let socApiVids = await socApi.getVideos();
    console.table(socApiVids);
    //let Partido = socApiVids[0];
    //console.table(Partido);
    //console.table(Partido.side1)
    //console.table(Partido.side2);
    //console.table(Partido.competition)
    this.setState((state, props) => {
      return {
        matchs: socApiVids
      };
    });
  }

  render() {
    return (
      <div className="matchs">
        {
          this.state.matchs && this.state.matchs.length > 0 &&
          this.state.matchs.map((elem, index) => {
            return (
            <section className="match" key={"match-"+index}>
              <h4 className="match-sides" key={'match-sides-'+index}>{elem.side1.name} - {elem.side2.name}</h4>
              <h3 className="match-competition" key={'match-competition-'+index}>
                {getCompetitionName(elem.competition.name)}
              </h3>
            </section>
            );
          })
        }
      </div>
    );
  }
}

export default App;
