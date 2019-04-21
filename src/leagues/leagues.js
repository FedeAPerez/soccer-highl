import React from "react";
import { arrayOf, string } from "prop-types";
import Matchs from "../matchs";
import "./leagues.scss";

const namespace = "fut-leagues";

const Tag = ({ length }) => {
  const shouldTagLeague = length > 3;

  if (shouldTagLeague) {
    return <span className={`${namespace}__tag`}>{`${length} Partidos`}</span>;
  } else {
    return null;
  }
};

const League = ({ id, leagueCountry, leagueCompetition, matchs }) => (
  <article className={`${namespace}__league`}>
    <header>
      <span className={`${namespace}__league__country`}>{leagueCountry}</span>
      <span className={`${namespace}__league__competition`}>
        {leagueCompetition}
      </span>
      <Tag length={matchs.length} />
    </header>
    <Matchs matchs={matchs} id={id} />
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
