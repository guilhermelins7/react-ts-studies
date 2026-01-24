import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss";
import { Cronometro } from "../components/Cronometro";
import { useState, useEffect } from "react";
import { ITarefa } from "../types/ITarefas";

function App() {
  const [ tarefas, setTarefas ] = useState<ITarefa[]>(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  const [ selecionado, setSelecionado ] = useState<ITarefa>();

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: toggleSelect(tarefa, tarefaSelecionada)
    })));
    console.log("Tarefa selecionada:", tarefaSelecionada);
  }

  function toggleSelect(tarefa: ITarefa, tarefaSelecionada: ITarefa) {
    if(tarefa.id === tarefaSelecionada.id) {
      if(tarefa.selecionado) return false;
      return true;
    }
    return false;
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
