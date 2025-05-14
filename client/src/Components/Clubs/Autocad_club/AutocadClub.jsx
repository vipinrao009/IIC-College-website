import React, { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import JoinClubModal from '../../JoinClubModal '

const AutocadClub = () => {
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
                Welcome to Institute Of Engineering And Technology, Khandari Auto Cad Club!
              </h1>
              <p className="text-lg md:text-xl">
              The AutoCAD Club is a creative and technical hub for students passionate about design, drafting, and engineering visualization. Focused on mastering tools like AutoCAD, SolidWorks, and other design software, the club empowers members to bring their innovative ideas to life through precise 2D and 3D modeling.</p>
            </div>
          </section>
    
          {/* Content Section */}
          <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Through hands-on workshops, design challenges, and expert-led sessions, the club builds essential skills in CAD (Computer-Aided Design), which are crucial for careers in architecture, mechanical design, civil engineering, and product development.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
              Whether it’s blueprint creation, architectural layouts, or mechanical component modeling, the AutoCAD Club provides a collaborative platform for learners to explore, innovate, and develop industry-ready drafting expertise. It’s where creativity meets precision.
              </p>
            </div>
          </section>
    
          {/* Incharge Section */}
          <section className="bg-blue-50 py-8 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
                Incharge of Club: Er. Manish Dixit
              </h2>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="bg-white py-12 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today!</h2>
              <p className="text-gray-700 mb-6">
                Ready to level up your AutoCAD journey? Join our community!
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

export default AutocadClub
