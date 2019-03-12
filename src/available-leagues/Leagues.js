import React, { useEffect, useState } from 'react';
import { SoccerAPI } from '../models/soccer-api';
import League from './League';

const AvailableLeagues = () => {
    const leagues = useSoccerVideos();

    return (
        <section className="leagues-grid">
            {
                leagues.length > 0 &&
                leagues.map((elem, index) => {
                    return (
                        <League 
                            key={'league'+index} 
                            league={elem.league} 
                            matchs={elem.matchs} />
                    );
                })
            }
        </section>
    );
}

const getGroupBy = (objectArray, property, secondProperty) => {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property][secondProperty];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
};

const getLeagues = response => { 
    let keys = getGroupBy(response, 'competition', 'name');
    let arrayOfLeagues = Object.keys(keys).map(function (key) {
        return { league: key, matchs: keys[key] };
    });

    return arrayOfLeagues;
};

const useSoccerVideos = () => {
    
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        SoccerAPI.getVideos().then(res => setLeagues(getLeagues(res)));
    }, []);

    return leagues;
}

export default AvailableLeagues;