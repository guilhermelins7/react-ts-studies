import React from "react";
import styles from "./Lista.module.scss";

// Functional component, forma mais simples e moderna de criar componentes em React:
function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "typescript",
      tempo: "00:30:00",
    },
  ];
  return (
    <aside className={styles.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          // key é uma propriedade obrigatória para cada item da lista, para o React identificar cada item:
          <li key={index} className={styles.item}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
