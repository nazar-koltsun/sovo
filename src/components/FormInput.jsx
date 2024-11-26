const FormInput = ({
  id,
  type = "text", // Default to "text" input
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
  ...props
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded-md text-[var(--electric-blue)] ${className}`}
      placeholder={placeholder}
      required={required}
      {...props}
    />
  );
};

export default FormInput;