import PlusIcon from '../assets/images/plus.svg';
import SearchInput from './SearchInput';
import BlockTitle from './BlockTitle';
import Button from './Button';

const PaymentsTableHeader = ({onModalOpen}) => {
  const basicFieldClasses =
    'w-[116px] h-[30px] border border-[#EEF2F7] rounded-[6px] focus:outline-none text-[13px]';

  return (
    <div className="flex gap-[40px] max-1600:flex-col max-1600:gap-4 max-1600:justify-between">
      <BlockTitle>Lokale Mieszkaniowe [VAT 8]</BlockTitle>
      <div className="ml-auto flex flex-wrap gap-[22px] max-1600:ml-0">
        <SearchInput
          className="min-w-[330px] max-500:min-w-full border border-[#EEF2F7] rounded-[6px] max-1600:grow"
          inputClassName="py-[5px] pl-[35px] pr-[10px] bg-transparent text-[11px]"
          iconClassName="w-[13px] h-[13px]"
          placeholder="Szukaj wg. klienta, mieszkania itp."
        />
        <input type="text" className={`${basicFieldClasses} px-[10px]`} />
        <input type="text" className={`${basicFieldClasses} px-[10px]`} />
        <select className={`${basicFieldClasses} pl-[5px] bg-transparent`}>
          <option value="Sortowanie">Sortowanie</option>
          <option value="Wszystkie">Wszystkie</option>
        </select>

        <Button className="h-[30px] gap-[5px] border-0 py-[3px] pl-[10px] pr-[12px] text-[11px]" onClick={onModalOpen}>
          <img src={PlusIcon} width={10} alt="Dodaj klienta" />
          Dodaj klienta
        </Button>
      </div>
    </div>
  );
};

export default PaymentsTableHeader;