import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-screen pr-2.5 bg-[#EDEDF2] font-figtree text-sm">
        <Header />
        <Sidebar />
        <main className="col-start-2 bg-[#EEF2F7]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
