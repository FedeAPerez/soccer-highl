import React from "react";
import { arrayOf, string } from "prop-types";
import Matchs from "../matchs";
import "./leagues.scss";

const namespace = "fut-leagues";

const League = ({ leagueCountry, leagueCompetition, matchs }) => (
  <article className={`${namespace}__league`}>
    <header>
      <span className={`${namespace}__league__country`}>{leagueCountry}</span>
      <span className={`${namespace}__league__competition`}>
        {leagueCompetition}
      </span>
    </header>
    <Matchs matchs={matchs} />
  </article>
);

League.propTypes = {
  id: string,
  leagueCountry: string,
  leagueCompetition: string
};

const Leagues = ({ leagues }) => (
  <section className={namespace}>
    {leagues.map(league => (
      <League key={`fut-leagues-${league.id}`} {...league} />
    ))}
  </section>
);

Leagues.propTypes = {
  leagues: arrayOf(League)
};

export default Leagues;
