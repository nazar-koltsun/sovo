import { useState } from 'react';
import Button from './Button';
import BurgerIcon from '../assets/images/burger.svg';

import SearchInput from './SearchInput';
import HeaderActions from './HeaderActions';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="flex items-center gap-2.5 col-start-2 mt-2.5 px-[43px] py-[9px] bg-white shadow-[0px_2px_4px_0px rounded-tl-[15px] rounded-tr-[15px] shadow-black/5">
      <Button className="px-3 py-[18px] hover:opacity-50" variant="flat">
        <img src={BurgerIcon} width={18} height={16} alt="" />
      </Button>

      <SearchInput
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Szukaj"
      />

      <HeaderActions />
    </header>
  );
};

export default Header;
