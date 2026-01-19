import styles from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/ITarefas";

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

// Functional component, forma mais simples e moderna de criar componentes em React:
function Lista( { tarefas, selecionaTarefa }: Props ) {
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
            selecionado={item.selecionado}
            completado={item.completado}
            // ou desestruturando: {...item}
            selecionaTarefa={selecionaTarefa} tarefas={[]}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
