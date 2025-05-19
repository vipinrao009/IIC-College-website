import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import axiosInstance from "../../Context/baseUrl";
import { toast } from "react-toastify";

const Joined_Students = () => {
  const [joinedStudents, setJoinedStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const fetchStudent = async () => {
    try {
      const res = await axiosInstance.get("/club/fetch-club");
      setJoinedStudents(res.data.students)
      setFilteredStudents(res.data.students)
    } catch (error) {
      toast.error("Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = joinedStudents.filter((student) =>
      Object.values(student).some((val) =>
        String(val).toLowerCase().includes(query)
      )
    );
    setFilteredStudents(filtered);
    setCurrentPage(1);
  };

  const handleDelete = async (id) => {
    try {
        await axiosInstance.delete(`/club/delete/${id}`);
        toast.success("Student deleted");
        fetchStudent();
    } catch (err) {
        toast.error("Failed to delete student");
    }
  };

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const paginatedData = filteredStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  return (
    <Layout>
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
          <h1 className="font-bold text-2xl">Joined club students</h1>

          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by name, email, roll..."
            className="border border-gray-400 px-3 py-2 rounded w-full md:w-1/2"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 border">Sr.</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Roll</th>
                <th className="px-4 py-2 border">Year</th>
                <th className="px-4 py-2 border">Club</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((student,idx) => (
                <tr key={student._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{idx+1}</td>
                  <td className="px-4 py-2 border">{student.name}</td>
                  <td className="px-4 py-2 border">{student.email}</td>
                  <td className="px-4 py-2 border">{student.phone}</td>
                  <td className="px-4 py-2 border">{student.roll}</td>
                  <td className="px-4 py-2 border">{student.year}</td>
                  <td className="px-4 py-2 border">{student.club}</td>
                  <td className="px-4 py-2 border flex gap-2">
                    <button
                      className="px-3 py-2 text-white bg-red-500 hover:underline"
                      onClick={() => handleDelete(student._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedData.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-1">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Joined_Students;
