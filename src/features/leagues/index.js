import React from "react";
import Leagues from "../../leagues/leagues";
import { useSoccerVideosByLeague } from "../../hooks/soccer-hooks";

const getLeagueCountry = name => name.split(":")[0];
const getLeagueCompetition = name => String(name.split(":")[1]).trim();

const EnhancedLeagues = () => {
  const leagues = useSoccerVideosByLeague();
  if (leagues && leagues.length > 0) {
    console.table(leagues);
    const propsLeagues =
      leagues &&
      leagues.map(league => ({
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

export default EnhancedLeagues;
