import React from "react";
import { arrayOf, bool, string } from "prop-types";
import { onScreenHook } from "../hooks/on-screen-hook";

const namespace = "fut-leagues__matchs";

const Matchs = ({ id, matchs }) => {
  const [ref, isOnScreen] = onScreenHook();
  return (
    <main className={namespace} id={`${namespace}__${id}`} ref={ref}>
      {matchs.map(match => (
        <section
          key={`fut-matchs-${match.title}`}
          className={`${namespace}__match`}
        >
          {isOnScreen && (
            <img
              className={`${namespace}__match__thumbnail`}
              src={match.thumbnail}
              alt={"match"}
            />
          )}
          {!isOnScreen && (
            <div className={`${namespace}__match__placeholder`} />
          )}
          <footer>
            <h1>{match.title}</h1>
          </footer>
        </section>
      ))}
    </main>
  );
};

Matchs.propTypes = {
  matchs: arrayOf({
    title: string.isRequired,
    thumbnail: string.isRequired,
    loadImage: bool
  })
};

export default Matchs;
