import { ITarefa } from '../../../types/ITarefas';
import styles from '../Lista.module.scss';

export default function Item({tarefa, tempo, id, selecionado, completado }: ITarefa) {
    console.log('Item atual:', {tarefa, tempo, id, selecionado, completado });

    return (
        <li className={styles.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}