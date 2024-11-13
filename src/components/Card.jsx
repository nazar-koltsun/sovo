const Card = ({ className, children }) => {
  return (
    <div className={`bg-white rounded-md pt-3.5 pb-9 px-5 shadow-blockShadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;