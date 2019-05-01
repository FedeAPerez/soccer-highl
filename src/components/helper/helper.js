import React from "react";
import Tag from "../tag";
import { GetEmoji } from "../../lib/main";
import "./helper.scss";

const namespace = "fut-helper";

const Helper = () => (
  <section className={`${namespace}`}>
    <h1>Ayuda</h1>
    <main className={`${namespace}__helps`}>
      <div className={`${namespace}__helps__help`}>
        <Tag className="mr-8">Partidos</Tag>para la mayor cantidad de contenido.
      </div>
      <div className={`${namespace}__helps__help`}>
        <Tag className="mr-8" modifier={"green"}>
          <GetEmoji id="fire" />
          Más vistos
        </Tag>
        para las mejores ligas y torneos del mundo.
      </div>
    </main>
  </section>
);

export default Helper;
