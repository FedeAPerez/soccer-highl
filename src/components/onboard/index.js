import React, { useState } from "react";
import Close from "./close";
import Profile from "./profile";
import Button from "./button";
import Helper from "../helper";
import { onboard } from "../../bl/onboard.json";
const namespace = "onboard";

const Introduction = () => (
  <React.Fragment>
    <img
      className={`${namespace}__main__content__image`}
      src={onboard.introduction.image}
      alt={onboard.introduction.altImage}
    />
    <main className={`${namespace}__main__content__text`}>
      {onboard.introduction.description}
    </main>
  </React.Fragment>
);

const Help = () => <Helper />;

const Onboard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [page, setPage] = useState(1);

  if (isVisible) {
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
              <Button
                className={`${namespace}__main__content__header__close`}
                onClick={e => {
                  e.preventDefault();
                  setIsVisible(false);
                }}
              >
                <Close />
              </Button>
            </header>
            {page === 1 ? <Introduction /> : null}
            {page === 2 ? <Help /> : null}
            <hr className="separator" />
            <footer className={`${namespace}__main__content__footer`}>
              <Button
                className={`${namespace}__main__content__footer__next button`}
                label={onboard.actions.next}
                onClick={
                  page < onboard.pages.max
                    ? e => {
                        e.preventDefault();
                        setPage(page + 1);
                      }
                    : e => {
                        e.preventDefault();
                        setIsVisible(false);
                      }
                }
              />
            </footer>
          </section>
        </section>
      </section>
    );
  }
  if (!isVisible) {
    return (
      <Button
        label={onboard.actions.comeBack}
        onClick={e => {
          e.preventDefault();
          setPage(onboard.pages.first);
          setIsVisible(true);
        }}
        className="onboard_welcome button"
      />
    );
  }
};

export default Onboard;
