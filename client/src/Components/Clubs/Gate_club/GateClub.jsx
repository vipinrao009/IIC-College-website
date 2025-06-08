import React, { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import JoinClubModal from '../../JoinClubModal '

const GateClub = () => {
  const {clubName} =  useParams()
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Layout>
          <div className="font-sans">
          {/* Header Section */}
          <header className="bg-gray-800 text-white py-6 shadow-lg z-10 relative">
            <div className="container mx-auto flex justify-between items-center px-3">
              <nav>
                <Link
                  to={`/club/${clubName}/events`}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 rounded-full border-4 border-yellow-500 animate-pulse
                  hover:from-yellow-500 hover:to-red-400 hover:shadow-yellow-500/80 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10"> View Events</span>
                
                </Link>
              </nav>
            </div>
          </header>
    
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center text-white py-12 px-4"
            style={{
              backgroundImage: `url(https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg?ga=GA1.1.2080037726.1734370406&semt=ais_hybrid&w=740)`, // Replace with your image path
            }}
          >
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Gate Club!
              </h1>
              <p className="text-lg md:text-xl">
              The GATE Club is a focused community dedicated to helping students prepare for the Graduate Aptitude Test in Engineering (GATE). It brings together aspiring engineers who aim to excel in one of India’s most prestigious competitive exams.              </p>
            </div>
          </section>
    
          {/* Content Section */}
          <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Through regular doubt-solving sessions, structured preparation strategies, and expert-led discussions, the club fosters a disciplined and supportive environment. Members collaborate, share resources, and stay updated with the latest exam trends and subject-wise preparation techniques.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
              By promoting peer learning and continuous motivation, the GATE Club empowers students to build a strong conceptual foundation and achieve their academic and career goals in higher education and public sector opportunities.
              </p>
            </div>
          </section>
    
          {/* Incharge Section */}
          <section className="bg-blue-50 py-8 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
                Incharge of Club: Er. Nagendra Singh
              </h2>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="bg-white py-12 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today!</h2>
              <p className="text-gray-700 mb-6">
                Ready to level up your GATE journey? Join our community!
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

export default GateClub
