import styles from '../Lista.module.scss';

interface ItemProps {
    tarefa: string,
    tempo: string
}

export default function Item({tarefa, tempo }: ItemProps) {
    return (
        <li className={styles.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}