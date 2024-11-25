const BlockTitle = ({className, children }) => {
  return (
    <h2 className={`${className} text-base font-semibold text-[var(--electric-blue)]`}>{children}</h2>
  );
};

export default BlockTitle;