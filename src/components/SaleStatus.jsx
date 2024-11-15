const SaleStatus = ({
  icon,
  title,
  amount,
  maxAmount,
  fillColor,
  className
}) => {
  const progress = (amount / maxAmount) * 100;
  const dashLength = (progress / 100) * 314; // 314 is the circumference of the circle (2 * Math.PI * 45)
  const dashArray = `${dashLength} ${314 - dashLength}`;

  return (
    <div className={`${className} flex justify-between items-center gap-20px w-full max-w-[320px] border border-[--bright-gray] p-[21px] pr-[50px] rounded-[6px]`}>
      <div className="flex flex-col items-start">
        <div className="w-12 h-12 rounded-[12px] flex justify-center items-center text-2xl text-gray-600 bg-[var(--alabaster)]">
          <img src={icon} width={28} height={28} alt="" />
        </div>
        <p className="mt-[20px] text-[15px] font-medium text-[var(--electric-blue)]">{title}</p>
        <p className="mt-[5px] text-xl font-semibold">{amount}</p>
      </div>
      <svg className="w-[65px] h-[65px]" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="#ccc"
          strokeWidth="16"
          fill="none"
          className="stroke-[#EEF2F7]"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={fillColor}
          strokeWidth="16"
          fill="none"
          strokeDasharray={dashArray}
          strokeLinecap="round"
          strokeDashoffset="115" // Start from the middle of the top
        />
      </svg>
    </div>
  );
};

export default SaleStatus;
