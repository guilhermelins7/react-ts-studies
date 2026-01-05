import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00:00"
  }

  adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      // Associando adicionar tarefa ao estado com bind(this).
      <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            type="text"
            value={this.state.tarefa}
            onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value})}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            name="tempo"
            value={this.state.tempo}
            onChange={evento => {
              this.setState({ ...this.state, tempo: evento.target.value});
            }}
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
