function Button({ children, action, styled }) {
  return (
    <button type="button" onClick={() => action()} className={styled}>
      {children}
    </button>
  );
}

export default Button;
