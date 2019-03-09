import React, { Component } from 'react';
import { SoccerApi } from '../models/soccer-api';
import './match.css';

const getCompetitionName = competition => competition.name.split(':')[1].trim();
const getSidesName = match => `${match.side1.name} - ${match.side2.name}`;
const getFirstVideo = match => ({ __html: match.embed });


class Matchs extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount() {
    let socApi = new SoccerApi();
    let videoResponse = await socApi.getVideos();
    videoResponse.error ? 
    this.setState((state, props) => {
      return {
        error : true
      }
    }) :
    this.setState((state, props) => {
      console.table(videoResponse)
      return {
        matchs: videoResponse
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
              <h3 className="match-sides" key={'match-sides-'+index}>
                {getSidesName(elem)}
              </h3>
              <section dangerouslySetInnerHTML=
                {getFirstVideo(elem)}>
              </section>
              <h4 className="match-competition" key={'match-competition-'+index}>
                {getCompetitionName(elem.competition)}
              </h4>
              <button>Ver videos</button>
            </section>
            );
          })
        }
        {
          this.state.error &&
          <section className="match-error-fetching">
            <h1>Falló al traer los partidos</h1>
            <h2>No pudimos traer los mejores momentos del fútbol internacional.</h2>
          </section>
        }
      </div>
    );
  }
}

export default Matchs;
