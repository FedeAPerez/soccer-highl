import React from "react";
import { arrayOf, string } from "prop-types";
import Tag, { TagModifier } from "../components/tag";
import Matchs from "../matchs";
import { GetEmoji } from "../lib/main";
import "./leagues.scss";

const namespace = "fut-leagues";

const withTagValidator = (validator, children, props) => {
  if (validator) {
    return <Tag {...props}>{children}</Tag>;
  } else {
    return null;
  }
};

const TagMatchs = ({ className, length }) =>
  withTagValidator(length > 3, `${length} Partidos`, { className });

const TagLeague = ({ className, competition }) =>
  withTagValidator(
    ["Ligue 1", "Serie A", "La Liga", "Premier League"].includes(competition),
    <span>
      <GetEmoji id="fire" /> mas vistos
    </span>,
    {
      modifier: TagModifier.green,
      className
    }
  );

const League = ({ id, leagueCountry, leagueCompetition, matchs }) => (
  <article className={`${namespace}__league`}>
    <header>
      <span className={`${namespace}__league__country`}>{leagueCountry}</span>
      <span className={`${namespace}__league__competition`}>
        {leagueCompetition}
      </span>
      <TagMatchs className="ml-8" length={matchs.length} />
      <TagLeague className="ml-8" competition={leagueCompetition} />
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
