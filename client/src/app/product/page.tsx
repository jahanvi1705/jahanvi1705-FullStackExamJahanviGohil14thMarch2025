// src/app/admin/users.tsx

import AdminLayout from "../../layout/AdminLayout";

const Product = () => {
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4  text-black p-5">Product Management</h2>
        {/* Example table of users */}
        <table className="w-full mt-6 table-auto border-collapse">
          <thead>
            <tr>
            <th className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this with dynamic data from API */}
            <tr>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Product 1</td>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Product Desc 1</td>
            </tr>
            <tr>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Product 2</td>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Product Desc 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Product;
