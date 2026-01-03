import React from "react";
import styles from "./Lista.module.scss";
import Item from "./Item";

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
          <Item
            // key é uma propriedade obrigatória para cada item da lista, para o React identificar cada item:
            key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}
            // ou desestruturando: {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
