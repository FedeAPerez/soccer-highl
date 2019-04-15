import React from "react";
import Leagues from "../../available-leagues/leagues";
import { useSoccerVideosByLeague } from "../../hooks/soccer-hooks";

const getLeagueCountry = name => name.split(":")[0];
const getLeagueCompetition = name => name.split(":")[1];

const enhance = () => {
  const leagues = useSoccerVideosByLeague();
  if (leagues) {
    console.table(leagues);

    const propsLeagues = leagues.map(league => ({
      id: league.league,
      leagueCountry: getLeagueCountry(league.leagueName),
      leagueCompetition: getLeagueCompetition(league.leagueName),
      matchs: league.matchs
    }));

    return <Leagues leagues={propsLeagues} />;
  } else {
    return null;
  }
};

export default enhance;
