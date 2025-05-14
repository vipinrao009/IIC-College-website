import { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../Context/baseUrl';
import { toast } from 'react-toastify';
import JoinClubModal from '../../JoinClubModal ';

const CodingClub = () => {
  const {clubName} =  useParams()
  const [modalOpen, setModalOpen] = useState(false);

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
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Join Now
          </button>

          <JoinClubModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            clubName={clubName}
          />
        </div>
      </section>
    </div>
    </Layout>
  )
}

export default CodingClub
