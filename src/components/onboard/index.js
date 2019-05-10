import React, { useState } from "react";
import Close from "./close";
import Profile from "./profile";

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
                <b>Fede Pérez</b> de Futbolín
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
              Futbolín es la nueva forma de enterarte de los últimos partidos.
            </main>
            <hr className="separator" />
            <footer className={`${namespace}__main__content__footer`}>
              <button className={`${namespace}__main__content__footer__next`}>
                Siguiente
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
        className="onboard_welcome"
      >
        Bienvenido
      </button>
    );
  }
};

export default Onboard;
