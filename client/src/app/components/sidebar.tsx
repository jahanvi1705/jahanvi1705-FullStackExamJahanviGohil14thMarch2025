import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-md w-64 h-screen bg-white-800 text-black p-5">
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/user/userList" className="hover:text-black-400">Users</Link>
        </li>
        <li>
          <Link href="/product" className="hover:text-black-400">Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
