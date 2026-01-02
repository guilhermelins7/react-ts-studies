import style from "./Botao.module.scss";

export default function Botao({ children }: {children: React.ReactNode}) {
  return (
    <button className={style.botao}>{children}</button>
  );
}
