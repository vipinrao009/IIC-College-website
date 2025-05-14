import { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import JoinClubModal from '../../JoinClubModal .jsx'

const GamingClub = () => {
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
            backgroundImage: `url(https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg?t=st=1745577797~exp=1745581397~hmac=2e7a0e335007c4a78de872365a00ede136ddc770fd81cf6089ab8e34a86fe3f3&w=1380)`, // Replace with your image path
          }}
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Institute Of Engineering And Technology, Khandari Gaming Club!
            </h1>
            <p className="text-lg md:text-xl">
            The Gaming Club is a vibrant community for students who share a passion for video games, game design, and interactive entertainment. It serves as a hub where creativity meets strategy, allowing members to explore both casual and competitive gaming.</p>
          </div>
        </section>
  
        {/* Content Section */}
        <section className="bg-gray-100 py-12 px-4">
          <div className="container mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
            From multiplayer tournaments to game development workshops, the club provides opportunities to enhance hand-eye coordination, critical thinking, and teamwork. It encourages healthy competition while also promoting innovation through game design challenges and coding-based game projects.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're a casual gamer, an aspiring game developer, or an esports enthusiast, the Gaming Club offers a space to connect, compete, and grow in the ever-evolving world of gaming and digital entertainment.
            </p>
          </div>
        </section>
  
        {/* Incharge Section */}
        <section className="bg-blue-50 py-8 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
              Incharge of Club: Er. Ashish Sharma
            </h2>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="bg-white py-12 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today!</h2>
            <p className="text-gray-700 mb-6">
              Ready to level up your Gaming journey? Join our community!
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

export default GamingClub
