import logo from '../../assets/images/logo.png';

const Sidebar = () => {
  return (
    <aside className="col-start-1 row-start-1 row-end-[-1] py-2 px-4 bg-[#EDEDF2]">
      <img src={logo} width={101} height={54} alt="Logo" />
      <div className="py-3">
        <span className="text-[11px] uppercase text-[var(--light-gray)]">
          · Menu
        </span>
        <nav className="mt-3.5">
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
