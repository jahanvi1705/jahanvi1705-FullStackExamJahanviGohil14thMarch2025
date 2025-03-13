import AdminLayout from "../../../layout/AdminLayout";

const Users = () => {
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md flex-col justify-center items-center ">
        <h2 className="text-2xl font-semibold mb-4  text-black p-5">Users Management</h2>
        {/* Example table of users */}
        <table className="w-full mt-6 table-auto border-collapse" style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>Jahanvi Gohil</td>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>jahanvi.mailinator.com</td>
            </tr>
            <tr>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>test test</td>
              <td className="border-b py-2 px-4  text-black p-5" style={{ border: '1px solid black', padding: '8px' }}>test@mailinator.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Users;
