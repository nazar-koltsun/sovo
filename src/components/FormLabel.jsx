const FormLabel = ({ htmlFor, children, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-[var(--arsenic)] ${className}`}
    >
      {children}
    </label>
  );
};

export default FormLabel;
