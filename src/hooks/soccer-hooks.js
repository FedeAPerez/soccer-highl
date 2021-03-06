import { useEffect, useState } from "react";
import { SoccerAPI } from "../api/soccer-api";

const getGroupBy = (objectArray, property, secondProperty) => {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property][secondProperty];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

const getLeagues = response => {
  let leagues = getGroupBy(response, "competition", "id");
  let arrayOfLeagues = Object.keys(leagues).map(idLeague => ({
    league: idLeague,
    leagueName: leagues[idLeague][0].competition.name,
    matchs: leagues[idLeague],
    key: idLeague
  }));

  return arrayOfLeagues;
};

const useSoccerVideosByLeague = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    SoccerAPI.getVideos().then(res => setLeagues(getLeagues(res)));
  }, []);
  return leagues;
};

const useSoccerVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    SoccerAPI.getVideos().then(res => setVideos(res));
  }, []);
  return videos;
};

export { useSoccerVideosByLeague, useSoccerVideos };
