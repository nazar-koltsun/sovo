const PageWrapper = ({ children }) => {
  return (
    <div className="h-full p-[21px] pb-[94px] pl-[43px] pr-[62px] max-1024:pl-[15px] max-1024:pr-[15px]">
      {children}
    </div>
  );
};

export default PageWrapper;