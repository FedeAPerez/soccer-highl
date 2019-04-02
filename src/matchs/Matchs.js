import React from "react";
import { useSoccerVideos } from "../hooks/soccer-hooks";
import "./match.css";

const namespace = "ui-futbolin__matchs";

const getCompetitionName = competition => {
  let countryCompetitionArray = competition.name.split(":");
  let country = countryCompetitionArray[0]
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return country + " - " + countryCompetitionArray[1].trim();
};
const getSidesName = match => `${match.side1.name} - ${match.side2.name}`;

const Matchs = () => {
  const matchs = useSoccerVideos();
  console.table(matchs);

  return (
    <div className={namespace}>
      {matchs.length > 0 &&
        matchs.map((match, index) => {
          const { competition, thumbnail } = match;
          return (
            <section className={`${namespace}__match`} key={"match-" + index}>
              <img
                alt={`match-tumbnail`}
                src={thumbnail}
                style={{
                  width: "200px",
                  height: "150px",
                  display: "block",
                  margin: "1rem auto",
                  marginLeft: 'unset'
                }}
              />
              <h3
                className={`${namespace}__match__sides`}
                key={"match-sides-" + index}
              >
                {getSidesName(match)}
              </h3>

              <h4
                className={`${namespace}__match__competition`}
                key={"match-competition-" + index}
              >
                {getCompetitionName(competition)}
              </h4>
            </section>
          );
        })}
    </div>
  );
};

export default Matchs;
