const Button = ({ variant = 'default', children, onClick, ...props }) => {
  const baseStyles = 'flex justify-center items-center gap-3 py-2 px-4 rounded-[6px] transition duration-300 ease-in-out';

  const variantStyles = {
    flat: 'text-[var(--gray)] hover:underline',
    default: 'py-[10px] px-[23px] text-white bg-[var(--maroon)] hover:bg-[#5a0101] border border-[#604AE3]',
    bordered: 'py-[10px] px-[23px] bg-transparent border border-[var(--maroon)] text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${props.className}`;

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;