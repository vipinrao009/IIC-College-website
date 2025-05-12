import { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../Context/baseUrl';
import { toast } from 'react-toastify';

const CodingClub = () => {
  const {clubName} =  useParams()
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    year:"",
    roll:"",
    club:clubName,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/club/join-club", formData);
      toast.success(res.data.message);
      setFormData({
            name:"",
            email:"",
            phone:"",
            year:"",
            roll:"",
            club:""
      })
      closeModal()
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      closeModal()
    }
  };

  const openModal = ()=>{
    setModalOpen(true)
  }

  const closeModal = ()=>{
    console.log(formData)
    setModalOpen(false)
  }
  return (
    <Layout>
      <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <nav className="flex text-right font-semibold space-x-6">
            <Link to={`/club/${clubName}/events`} className="hover:text-gray-300">Events</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-12 px-4"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1734755309~exp=1734758909~hmac=25ed39450babcb8987d55313539bf2074a6859a300556e02cacd15961ef687f9&w=996)`, // Replace with your image path
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Institute Of Engineering And Technology, Khandari Coding Club!
          </h1>
          <p className="text-lg md:text-xl">
            A coding club is a community or organization where individuals with an interest in programming and computer
            science come together to learn, collaborate, and engage in coding-related activities.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Coding clubs foster a sense of community among individuals who share a passion for coding. Regular meetups,
            discussions, and social events contribute to building a supportive and collaborative community. Coding clubs
            provide opportunities to enhance programming skills, participate in competitions, and learn from industry
            professionals.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Coding clubs aim to create inclusive environments, welcoming individuals from diverse backgrounds and skill
            levels. Efforts may be made to promote diversity, equity, and inclusion within the club.
          </p>
        </div>
      </section>

      {/* Incharge Section */}
      <section className="bg-blue-50 py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
            Incharge of Club: Er. Saurabh Garg
          </h2>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today!</h2>
          <p className="text-gray-700 mb-6">
            Ready to level up your coding journey? Join our community!
          </p>
          <button
            onClick={openModal}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Join Now
          </button>
        </div>
      </section>
    </div>

    {modalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h3 className="text-lg  text-center font-bold mb-4">Join Club</h3>
          <input
            type="name"
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
          />
          <input
            type="phone"
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
          />
          <input
            type="roll"
            name='roll'
            value={formData.roll}
            onChange={handleChange}
            placeholder="Enter your University roll number"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
          />
          
          <select
           name="year" 
           id="year"
           value={formData.year}
           onChange={handleChange}
           className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-blue-300"
          >
            <option value="">Selet Year</option>
            <option value="I year">I year</option>
            <option value="II year">II year</option>
            <option value="III year">III year</option>
            <option value="IV year">IV year</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    )}
    </Layout>
  )
}

export default CodingClub
