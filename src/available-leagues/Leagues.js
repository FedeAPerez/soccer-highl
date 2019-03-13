import React  from 'react';
import League from './League';
import { useSoccerVideosByLeague, useSoccerVideos } from '../hooks/soccer-hooks';

const AvailableLeagues = () => {
    const leagues = useSoccerVideosByLeague();
    const allMatchs = useSoccerVideos();
    console.table(allMatchs);

    return (
        <section>
            <section className="leagues-grid">
                {
                    leagues.length > 0 &&
                    leagues.map(elem => <League {...elem} />)
                }
            </section>
            <h1>Estos son nuestros partidos</h1>
        </section>
    );
}

export default AvailableLeagues;