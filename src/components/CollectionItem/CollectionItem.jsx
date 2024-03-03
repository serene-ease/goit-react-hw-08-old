// import style from './CollectionItem.module.css';

export const CollectionItem = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};