import React, { Component } from 'react';
import { SoccerApi } from './models/soccer-api';
import './match.css';

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
    let Partido = socApiVids[0];
    console.table(Partido);
    console.table(Partido.side1)
    console.table(Partido.side2);
    console.table(Partido.competition)
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
            <section key={"match_"+index} className="match">
              <span key={'match_side1_'+index}>{elem.side1.name}</span>
              <span key={'match_side2_'+index}>{elem.side2.name}</span>
              <span key={'match_competition_'+index}>{elem.competition.name}</span>
            </section>
            );
          })
        }
      </div>
    );
  }
}

export default App;
