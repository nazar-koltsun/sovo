import SuccessIcon from '../assets/images/succes-status.svg';

const VindicationStatus = ({className}) => {
  return (
    <div className={`${className} flex items-center gap-4 w-[200px] m-auto`}>
      <img src={SuccessIcon} className='shrink-0' width={42} height={42} alt="Status Icon" />
      <p className="font-medium text-[15px] text-[var(--arsenic)]">Wszystkie płatności opłacone na czas</p>
    </div>
  );
};

export default VindicationStatus;