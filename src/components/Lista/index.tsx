import React from "react";
import styles from "./Lista.module.scss";
import Item from "./Item";

// Functional component, forma mais simples e moderna de criar componentes em React:
function Lista() {
  const tarefas = [
    {
      id: crypto.randomUUID(),
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      id: crypto.randomUUID(),
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      id: crypto.randomUUID(),
      tarefa: "typescript",
      tempo: "00:30:00",
    },
  ];
  return (
    <aside className={styles.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            // key é uma propriedade obrigatória para cada item da lista, para o React fazer a ligação VDOM <> DOM:
            key={item.id}
            id={item.id} // Passando valor de 'key' para visualização VDOM <> DOM
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
