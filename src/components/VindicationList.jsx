import React from 'react';
import VindicationIcon from '../assets/images/vindication.svg';
import SuccessIcon from '../assets/images/succes-status.svg';
import FailedIcon from '../assets/images/failed-status.svg';
import PendingIcon from '../assets/images/pending-status.svg';

const determineStatusIcon = (statusType) => {
  if (statusType === 'success') {
    return SuccessIcon;
  } else if (statusType === 'failed') {
    return FailedIcon;
  } else {
    return PendingIcon;
  }
};

const VindicationList = ({ items }) => {
  return (
    <div className='max-768:w-[calc(100vw-95px)] max-768:overflow-x-auto'>
      <table className="w-full max-768:whitespace-nowrap">
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className=" border-b border-[var(--bright-gray)]">
              <td className="pb-[42px] pt-[22px] pr-[15px]">
                <div className="flex justify-center items-center w-[32px] h-[48px] rounded-[6px] bg-[var(--alabaster)]">
                  <img src={VindicationIcon} width={23} height={23} alt="" />
                </div>
              </td>

              <td className="min-w-[200px] pb-[42px] pt-[22px] pr-[15px]">
                <p className="text-[15px] font-medium leading-[22px] text-[var(--arsenic)]">
                  {item.title}
                </p>
                <p className="text-[#687D92]">{item.email}</p>
              </td>

              <td className="min-w-[85px] pb-[42px] pt-[22px] pr-[15px]">
                <p className="text-base font-medium text-[var(--arsenic)]">
                  {item.price}
                </p>
              </td>

              <td className="pb-[42px] pt-[22px] whitespace-normal">
                <div className="flex items-center ml-auto gap-[5px] w-[70px]">
                  <img
                    src={determineStatusIcon(item.status.type)}
                    width={13}
                    height={13}
                    alt="Status icon"
                  />
                  <div className="text-[13px] text-[var(--electric-blue)]">
                    <p>{item.status.title}</p>
                    <p>{item.status.date}</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VindicationList;
