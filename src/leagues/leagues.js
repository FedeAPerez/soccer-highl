import React from "react";
import { arrayOf, string } from "prop-types";
import "./leagues.css";

const namespace = "fut-leagues";

const Match = ({ title, thumbnail }) => (
  <section className={`${namespace}__matchs__match`}>
    <img
      className={`${namespace}__matchs__match__thumbnail`}
      src={thumbnail}
      alt={`fut-leagues-img`}
    />
    <footer>
      <h1>{title}</h1>
    </footer>
  </section>
);

const League = ({ id, leagueCountry, leagueCompetition, matchs }) => (
  <article key={`fut-leagues-${id}`}>
    <header>
      <span className={`${namespace}__league__country`}>{leagueCountry}</span>
      <span className={`${namespace}__league__competition`}>
        {leagueCompetition}
      </span>
    </header>
    <main className={`${namespace}__matchs`}>
      {matchs.map(match => (
        <Match key={`fut-leagues-${id}-matchs-${match.title}`} {...match} />
      ))}
    </main>
  </article>
);

League.propTypes = {
  id: string,
  leagueCountry: string,
  leagueCompetition: string,
  matchs: arrayOf(Match)
};

const Leagues = ({ leagues }) => (
  <section className={namespace}>
    {leagues.map(league => (
      <League {...league} />
    ))}
  </section>
);

Leagues.propTypes = {
  leagues: arrayOf(League)
};

export default Leagues;
