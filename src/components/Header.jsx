import { useState } from 'react';
import Button from './Button';
import BurgerIcon from '../assets/images/burger.svg';

import SearchInput from './SearchInput';
import HeaderActions from './HeaderActions';

const Header = ({openSidebar}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="flex flex-wrap items-center gap-2.5 col-start-2 max-768:col-start-1 mt-2.5 px-[43px] max-1024:px-[15px] py-[9px] bg-white rounded-tl-[15px] rounded-tr-[15px] shadow-blockShadow">
      <Button className="hidden max-768:flex px-3 py-[18px] hover:opacity-50" variant="flat" onClick={openSidebar}>
        <img src={BurgerIcon} width={18} height={16} alt="" />
      </Button>

      <SearchInput
        className="max-768:order-last max-768:w-full"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Szukaj"
      />

      <HeaderActions />
    </header>
  );
};

export default Header;
