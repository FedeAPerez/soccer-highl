import React from 'react';
import { useSoccerVideos } from '../hooks/soccer-hooks';
import './match.css';

const getCompetitionName = competition => competition.name.split(':')[1].trim();
const getSidesName = match => `${match.side1.name} - ${match.side2.name}`;


const Matchs = () => {
  const matchs = useSoccerVideos();
  console.table(matchs);
  
  return (
    <div className="matchs">
      {
        matchs.length > 0 &&
        matchs.map((elem, index) => {
          return (
          <section className="match" key={"match-"+index}>
            <h3 className="match-sides" key={'match-sides-'+index}>
              {getSidesName(elem)}
            </h3>

            <h4 className="match-competition" key={'match-competition-'+index}>
              {getCompetitionName(elem.competition)}
            </h4>
          </section>
          );
        })
      }
    </div>
  );
}

export default Matchs;
