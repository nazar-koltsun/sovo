import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const RootLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-screen bg-[#EDEDF2] font-figtree text-sm">
        <header className="col-start-2">header</header>
        <Sidebar />
        <main className="col-start-2 bg-[#EEF2F7]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
