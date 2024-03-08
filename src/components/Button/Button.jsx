// import style from './Button.module.css's

export const Button = ({
    children,
    onClick,
  }) =>  {
    return (
      <button type='button' onClick={onClick}>
        {children}
      </button>
    );
  }