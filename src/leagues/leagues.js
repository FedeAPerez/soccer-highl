import React from "react";
import { arrayOf, string } from "prop-types";
import Tag from "../components/tag";
import Matchs from "../matchs";
import "./leagues.scss";

const namespace = "fut-leagues";

const TagMatchs = ({ length }) => {
  const shouldTagLeague = length > 3;

  if (shouldTagLeague) {
    return <Tag>{`${length} Partidos`}</Tag>;
  } else {
    return null;
  }
};

const TagLeague = ({ competition }) => {
  const shouldTagCompetition = ["Ligue 1"].includes(competition);

  if (shouldTagCompetition) {
    return <Tag modifier={"green"}>Más vistos</Tag>;
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
      <TagMatchs length={matchs.length} />
      <TagLeague competition={leagueCompetition} />
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
