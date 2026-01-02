import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  render() {
    return (
      <form action="" className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            type="text"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            name="tempo"
            id="tempo"
            type="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao>
          Adicionar
        </Botao>
      </form>
    );
  }
}

export default Formulario;
