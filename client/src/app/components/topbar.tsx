'use client'
import { useRouter } from 'next/navigation';

const Topbar = () => {
  const router = useRouter();
  
  const handleLogout = async () => {
    router.push('/login');
  };

  return (
    <>
     <div className="bg-white w-full relative h-[80px]">
      <div className="w-full flex justify-end items-end py-5 pr-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {handleLogout()}} >Logout</button>
      </div>
    </div>
    </>
  );
};

export default Topbar;
