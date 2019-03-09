import React from 'react';
import './League.css';
const getLeagueName = league => league.split(':')[1];
const getLeagueCountry = league => league.split(':')[0];
const getSides = match => `${match.side1.name} - ${match.side2.name}` 

const MatchsBasic = ({ children, ...props }) => {
    return (
        <ul>
            {
                props.matchs &&
                props.matchs.map((elem, index) => {
                    return <li key={"match-"+index} className="match">{getSides(elem)}</li>
                })
            }
        </ul>
    );
}

const League = ({ children, ...props}) => {
    return (
        <section className="league-card">
            <h3>
                {getLeagueCountry(props.league)}
            </h3>
            <h2>
                {getLeagueName(props.league)}
            </h2>
            <h4>
                {`${props.matchs.length} partidos`}
            </h4>
            <button>Ver</button>
        </section>
    );
};

export default League;