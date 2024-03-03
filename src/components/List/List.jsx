// import style from './List.module.css';

export const List = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};