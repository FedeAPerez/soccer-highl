import React, { useState } from "react";
import Close from "./close";
import Profile from "./profile";
import Button from "./button";
import Helper from "../helper";
import { onboard } from "../../bl/onboard.json";
const namespace = "onboard";

const MainContent = ({ page }) => (
  <section className={`${namespace}__main__content`}>
    {page === 1 ? <Introduction /> : null}
    {page === 2 ? <Help /> : null}
    {page === 3 ? <Finish /> : null}
  </section>
);

const MemoMainContent = React.memo(MainContent);

const Introduction = () => (
  <React.Fragment>
    <h1 className={`${namespace}__main__content__title`}>
      {onboard.introduction.title}
    </h1>
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

const Finish = () => (
  <React.Fragment>
    <h1 className={`${namespace}__main__content__title`}>
      {onboard.finish.title}
    </h1>
    <main className={`${namespace}__main__content__text`}>
      {onboard.finish.description}
    </main>
  </React.Fragment>
);

const Header = ({ setIsVisible }) => (
  <header className={`${namespace}__main__header`}>
    <span>
      <Profile className={`${namespace}__main__header__image`} />
      <b>{onboard.user.name}</b>
      {onboard.user.entity}
    </span>
    <Button
      className={`${namespace}__main__header__close`}
      onClick={e => {
        e.preventDefault();
        setIsVisible(false);
      }}
    >
      <Close />
    </Button>
  </header>
);

const Footer = ({ page, setPage, setIsVisible }) => (
  <footer className={`${namespace}__main__footer`}>
    <Button
      className={`${namespace}__main__footer__next button`}
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
);

const Help = () => (
  <React.Fragment>
    <h1 className={`${namespace}__main__content__title`}>
      {onboard.help.title}
    </h1>
    <Helper />
  </React.Fragment>
);

const Onboard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [page, setPage] = useState(1);

  if (isVisible) {
    return (
      <section className={namespace}>
        <section className={`${namespace}__main`}>
          <Header setIsVisible={setIsVisible} />
          <MemoMainContent page={page} />
          <hr className="separator" />
          <Footer page={page} setPage={setPage} setIsVisible={setIsVisible} />
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
