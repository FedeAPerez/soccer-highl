import React from "react";
const getLeagueName = league => league.split(":")[1];
const getLeagueCountry = league => league.split(":")[0];

const League = ({ matchs, league }) => {
  return (
    <section className="league-card">
      <h3>{getLeagueCountry(league)}</h3>
      <h2>{getLeagueName(league)}</h2>
      <h4>{`${matchs.length} partidos`}</h4>
    </section>
  );
};

export default League;
