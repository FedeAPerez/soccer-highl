import React from "react";
import { arrayOf, bool, string } from "prop-types";
import { onScreenHook } from "../hooks/on-screen-hook";

const namespace = "fut-leagues__matchs";

const Match = ({ title, thumbnail, loadImage }) => (
  <section className={`${namespace}__match`}>
    {loadImage && (
      <img
        className={`${namespace}__match__thumbnail`}
        src={thumbnail}
        alt={"match"}
      />
    )}
    {!loadImage && <div className={`${namespace}__match__placeholder`} />}
    <footer>
      <h1>{title}</h1>
    </footer>
  </section>
);

Match.propTypes = {
  title: string.isRequired,
  thumbnail: string.isRequired,
  loadImage: bool
};

Match.defaultProps = {
  loadImage: false
};

const Matchs = ({ matchs }) => {
  const [ref, isOnScreen] = onScreenHook();
  return (
    <main className={namespace} ref={ref}>
      {matchs.map(match => (
        <Match
          key={`fut-matchs-${match.title}`}
          title={match.title}
          thumbnail={match.thumbnail}
          loadImage={isOnScreen}
        />
      ))}
    </main>
  );
};

Matchs.propTypes = {
  matchs: arrayOf(Match)
};

export default Matchs;
