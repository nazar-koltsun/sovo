import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-[260px_1fr] max-1024:grid-cols-[210px_1fr] max-768:grid-cols-[1fr] grid-rows-[auto_1fr] min-h-screen pr-2.5 max-768:pl-2.5 bg-[#EDEDF2] font-figtree text-sm">
        <Header openSidebar={openSidebar} />
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
        <main className="col-start-2 max-768:col-start-1 bg-[#F9F9FC] border-t-[2px] border-t-[#EEF2F7]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
