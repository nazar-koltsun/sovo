const Button = ({ variant = 'default', children, onClick, ...props }) => {
  const baseStyles = 'flex items-center gap-3 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    flat: 'pl-0 pr-0 pt-0 pb-0 text-[var(--gray)] hover:underline',
    default: 'bg-blue-800 text-white hover:bg-blue-600',
    bordered: 'border border-blue-500 text-blue-500 hover:bg-blue-50'
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${props.className}`;

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;