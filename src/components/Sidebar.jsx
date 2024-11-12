import logo from '../assets/images/logo.png';
import MainNav from './MainNav';
import Button from './Button';
import LogOutIcon from '../assets/images/log-out.svg';
import RightArrowIcon from '../assets/images/right-arrow.svg';

const Sidebar = () => {
  return (
    <aside className="col-start-1 row-start-1 row-end-[-1] py-2 px-4 bg-[#EDEDF2]">
      <img className='ml-4' src={logo} width={101} height={54} alt="Logo" />

      <div className="py-3">
        <span className="ml-4 text-[11px] uppercase text-[var(--gray)] opacity-60">
          · Menu
        </span>

        <MainNav />

        <Button variant="flat" className="mt-[72px] opacity-50 text-[15px]">
          <img src={LogOutIcon} width={16} height={16} alt="Wyloguj" />
          Wyloguj się
        </Button>

        <Button
          variant="flat"
          className="mt-[280px] text-[var(--maroon)] font-medium gap-5"
        >
          Więcej
          <img src={RightArrowIcon} width={15} height={15} alt="Więcej" />
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
