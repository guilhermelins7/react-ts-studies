import styles from '../Lista.module.scss';

interface ItemProps {
    tarefa: string,
    tempo: string,
    id: string // Propriedade apenas para visualização da key VDOM <> DOM
}

export default function Item({tarefa, tempo, id }: ItemProps) {
    console.log(`Item ${tarefa} component key: ${id}`);

    return (
        <li className={styles.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}