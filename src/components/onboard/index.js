import React, { useState } from "react";
import Close from "./close";
import Profile from "./profile";
import { onboard } from "../../bl/onboard.json";

const Onboard = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (isVisible) {
    let namespace = "onboard";
    return (
      <section className={namespace}>
        <section className={`${namespace}__main`}>
          <section className={`${namespace}__main__content`}>
            <header className={`${namespace}__main__content__header`}>
              <span>
                <Profile
                  className={`${namespace}__main__content__header__image`}
                />
                <b>{onboard.user.name}</b>
                {onboard.user.entity}
              </span>
              <button
                className={`${namespace}__main__content__header__close`}
                onClick={e => {
                  e.preventDefault();
                  setIsVisible(false);
                }}
              >
                <Close />
              </button>
            </header>
            <img
              className={`${namespace}__main__content__image`}
              src="soccer.jpg"
            />
            <main className={`${namespace}__main__content__text`}>
              {onboard.introduction.description}
            </main>
            <hr className="separator" />
            <footer className={`${namespace}__main__content__footer`}>
              <button
                className={`${namespace}__main__content__footer__next button`}
              >
                {onboard.actions.next}
              </button>
            </footer>
          </section>
        </section>
      </section>
    );
  }
  if (!isVisible) {
    return (
      <button
        onClick={e => {
          e.preventDefault();
          setIsVisible(true);
        }}
        className="onboard_welcome button"
      >
        {onboard.actions.comeBack}
      </button>
    );
  }
};

export default Onboard;
