const PageTitle = ({ children }) => {
  return (
    <h1 className="font-semibold text-lg leading-5 text-[var(--electric-blue)]">
      {children}
    </h1>
  );
};

export default PageTitle;