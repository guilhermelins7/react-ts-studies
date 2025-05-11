import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            type="text"
            required
          />
        </div>
        <div>
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
        <Botao />
      </form>
    );
  }
}

export default Formulario;
