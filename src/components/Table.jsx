import { cn } from '../lib/utils';
import Button from './Button';
import EditDotsIcon from '../assets/images/edit-dots.svg';

const TableCheckBox = ({ onChange }) => {
  return (
    <input
      className="flex items-center justify-center appearance-none w-4 h-4 border border-[#D7D7D7] rounded-[4px]  checked:before:content-['✅'] checked:before:w-4 checked:before:h-4"
      type="checkbox"
      onChange={onChange}
    />
  );
};

const Table = ({
  topContent,
  data,
  summary,
  bill,
  editable = false,
  hasActions = false,
  showTotalPrimary,
  showTotalSecondary,
  className,
}) => {
  const basicTdClasses = 'py-[15px] px-[15px] text-left';
  const emptyActionTd = <td className={`${basicTdClasses} w-[54px]`}></td>;

  return (
    <div
      className={`${className} bg-white rounded-[6px] border border-[var(--bright-gray)] text-[var(--electric-blue)] overflow-x-auto w-[calc(100vw-382px)] max-1024:w-[calc(100vw-257px)] max-768:w-[calc(100vw-57px)]`}
    >
      <div className="sticky left-0 py-[20px] px-[20px] border-b border-[var(--bright-gray)]">
        {topContent}
      </div>
      <table className="w-full whitespace-nowrap relative">
        <thead>
          <tr className="bg-[var(--lotion)] border-b border-[var(--bright-gray)]">
            {editable && (
              <th className={`${basicTdClasses} w-[54px]`}>
                <div className="flex items-center">
                  <TableCheckBox onChange={() => {}} />
                </div>
              </th>
            )}
            {Object.keys(data[0]).map((key, index) => (
              <th key={index} className={`${basicTdClasses} font-medium`}>
                {key}
              </th>
            ))}
            {hasActions && <th className={`${basicTdClasses} w-[54px]`}></th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[var(--bright-gray)]">
              {editable && (
                <td className="text-left py-[22px] px-[15px] w-[54px]">
                  <div className="flex items-center">
                    <TableCheckBox onChange={() => {}} />
                  </div>
                </td>
              )}
              {Object.keys(row).map((key, index) => (
                <td key={index} className={`${basicTdClasses}`}>
                  {key === 'Status' ? (
                    <span
                      className={cn(
                        'text-[11px] p-1 text-center rounded-[4px] text-white',
                        row[key] === 'Windykacja' && 'bg-[#C15C5C]',
                        row[key] === 'Po terminie' && 'bg-[#E99B67]',
                        row[key] === 'Zapłacono' && 'bg-[#5CC184]',
                        row[key] === 'Do zapłaty' && 'bg-[#BEBEBE]'
                      )}
                    >
                      {row[key]}
                    </span>
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
              {hasActions && (
                <td className={`${basicTdClasses} w-[54px]`}>
                  <Button
                    className="w-[30px] h-[30px] pt-0 pb-0 pr-0 pl-0"
                    variant="flat"
                  >
                    <img src={EditDotsIcon} alt="Edytuj" />
                  </Button>
                </td>
              )}
            </tr>
          ))}

          {showTotalPrimary && (
            <>
              <tr className="bg-[#E6E6E7] border-b border-[var(--bright-gray)]">
                {editable && <td className="w-[54px]"></td>}
                {Object.keys(data[0]).map((key, index) => (
                  <td key={index} className={`${basicTdClasses} font-semibold`}>
                    {summary[key]}
                  </td>
                ))}
                {hasActions && emptyActionTd}
              </tr>
              <tr>
                {editable && <td className="w-[54px]"></td>}
                {Object.keys(data[0]).map((key, index) => (
                  <td key={index} className={`${basicTdClasses} font-semibold`}>
                    {bill[key]}
                  </td>
                ))}
              </tr>
            </>
          )}

          {showTotalSecondary && (
            <>
              <tr className="bg-[#E6E6E7] border-b border-[var(--bright-gray)]">
                {editable && <td className="w-[54px]"></td>}
                {Object.keys(data[0]).map((key, index) => (
                  <td key={index} className={`${basicTdClasses} font-medium`}>
                    {summary[key]}
                  </td>
                ))}
                {hasActions && emptyActionTd}
                <td>
                  <div className="absolute flex justify-between items-center bottom-[51px] left-[50%] transform -translate-x-1/2 w-[500px] px-[12px] h-[31px] bg-[#E6E6E7] font-medium">
                    <p>Pozostało na rachubku deweloperskim:</p>
                    <p className="font-semibold">100 000 zł</p>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[var(--bright-gray)]">
                {editable && <td className="w-[54px]"></td>}
                {Object.keys(data[0]).map((key, index) => (
                  <td key={index} className={`${basicTdClasses}`}></td>
                ))}
                {hasActions && emptyActionTd}
              </tr>

              <tr className="bg-[var(--lotion)]">
                {editable && <td className="w-[54px]"></td>}
                {Object.keys(data[0]).map((key, index) => (
                  <td key={index} className={`${basicTdClasses} font-medium`}>
                    {bill[key]}
                  </td>
                ))}
                {hasActions && emptyActionTd}
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
