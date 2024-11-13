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
  className,
}) => {
  const basicTdClasses = 'py-[15px] px-[15px] text-left';
  return (
    <div
      className={`${className} bg-white rounded-[6px] border border-[var(--bright-gray)] text-[var(--electric-blue)] overflow-x-auto`}
    >
      <div className="py-[20px] px-[20px] border-b border-[var(--bright-gray)]">
        {topContent}
      </div>
      <table className="table-auto w-full">
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
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-[#E6E6E7] border-b border-[var(--bright-gray)]">
            {editable && <td className="w-[54px]"></td>}
            {Object.keys(data[0]).map((key, index) => (
              <td key={index} className={`${basicTdClasses} font-semibold`}>
                {summary[key]}
              </td>
            ))}
          </tr>
          <tr>
            {editable && <td className="w-[54px]"></td>}
            {Object.keys(data[0]).map((key, index) => (
              <td key={index} className={`${basicTdClasses} font-semibold`}>
                {bill[key]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
