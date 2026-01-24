import Botao from '../Botao';
import Relogio from './Relogio';
import styles from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/ITarefas';
import { useEffect, useState, useRef } from 'react';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [ tempo, setTempo ] = useState<number>();
    const [ cronometroAtivo, setCronometroAtivo ] = useState(false);
    const intervaloRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
            setCronometroAtivo(false);
            if(intervaloRef.current) {
                clearInterval(intervaloRef.current);
                intervaloRef.current = null;
            }
        }
    }, [selecionado]);

    function iniciar() {
        if(tempo && tempo > 0) {
            setCronometroAtivo(true);
            intervaloRef.current = setInterval(() => {
                setTempo((tempoAtual) => {
                    if(tempoAtual && tempoAtual > 1) {
                        return tempoAtual - 1;
                    } else {
                        pausar();
                        finalizarTarefa();
                        return 0;
                    }
                });
            }, 1000);
        }
    }

    function pausar() {
        setCronometroAtivo(false);
        if(intervaloRef.current) {
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
        }
    }

    function finalizar() {
        pausar();
        finalizarTarefa();
    }

    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo} >Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper} >
                <Relogio tempo={tempo} />
            </div>
            <div className={styles.botoesContainer}>
                {!cronometroAtivo ? (
                    <Botao onClick={iniciar}>
                        Começar
                    </Botao>
                ) : (
                    <>
                        <Botao onClick={pausar}>
                            Pausar
                        </Botao>
                        <Botao onClick={finalizar}>
                            Finalizar
                        </Botao>
                    </>
                )}
            </div>
        </div>
    );
}
