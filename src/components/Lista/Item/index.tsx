import { ITarefa } from "../../../types/ITarefas";
import styles from "./Item.module.scss";

interface Props extends ITarefa {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  id,
  selecionado,
  completado,
  selecionaTarefa,
}: Props) {
  console.log("Item atual:", { tarefa, tempo, id, selecionado, completado });

  return (
    <li
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} ${completado ? styles.itemCompletado : ''}`}
      onClick={() =>
        !completado && selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={styles.concluido}></span>}
    </li>
  );
}
