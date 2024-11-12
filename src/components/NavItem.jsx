import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const NavItem = ({ title, path, icon, isNew }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            'flex items-center gap-3 py-2.5 px-4 text-[var(--gray)] text-[15px] rounded-[6px] hover:bg-[#DADAE1]',
            isActive && 'bg-[#DADAE1]'
          )
        }
      >
        <img src={icon} alt={title} />
        {title}
        {isNew && (
          <span className="flex ml-auto text-white text-[11px] font-semibold py-[3px] px-[4px] leading-[11px] bg-[var(--pink)] rounded-[4px]">
            Nowa
          </span>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
