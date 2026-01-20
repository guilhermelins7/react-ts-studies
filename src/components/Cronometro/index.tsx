import Botao from '../Botao';
import Relogio from './Relogio';
import styles from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/date';

export function Cronometro() {
    console.log('Conversão:', tempoParaSegundos("01:01:01"));
    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo} >Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper} >
                <Relogio/>
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    );
}