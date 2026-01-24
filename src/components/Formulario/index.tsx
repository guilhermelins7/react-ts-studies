import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { ITarefa } from "../../types/ITarefas";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas(tarefasAnteriores => [
      ...tarefasAnteriores,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: crypto.randomUUID()
      }
    ]);
    setTarefa("");
    setTempo("00:00");
  } 

  return (
    <form action="" className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          type="text"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
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
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          required
        />
      </div>
      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  );
}

export default Formulario;
