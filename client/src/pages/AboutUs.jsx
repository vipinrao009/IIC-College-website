import React from 'react'
import Layout from '../Layout/Layout'

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-center">
            Welcome to the IET Club Nest
          </h1>
          <p className="mt-4 text-center text-lg lg:text-xl font-light">
            Empowering Students to innovate, learn, and grow together.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-20 mt-10 mb-20">
        {/* Who We Are Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
          We are a passionate community of innovators, learners, and creators united by a shared purpose — to grow, collaborate, and make a meaningful impact. Our club is more than just a group; it's a vibrant ecosystem where students from diverse backgrounds come together to exchange ideas, develop skills, and explore new possibilities.
          Driven by curiosity and fueled by creativity, we organize workshops, competitions, interactive sessions, and real-world projects that empower our members to think beyond the classroom. Whether it's through coding, design, robotics, research, or leadership, we foster a culture of continuous learning and collective growth.
          At our core, we believe in teamwork, talent, and transformation — shaping not just great professionals, but future leaders and changemakers.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-50 shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to foster a culture of continuous learning, encourage innovation, and build a supportive network where members can share their knowledge, 
            work on impactful projects, and achieve excellence in the tech industry.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
            <li>Organize hands-on workshops and bootcamps on trending technologies.</li>
            <li>Host hackathons and coding challenges to push your limits.</li>
            <li>Provide one-on-one mentorship and career guidance.</li>
            <li>Collaborate on open-source and real-world projects.</li>
            <li>Connect with industry leaders through seminars and guest lectures.</li>
          </ul>
        </section>
      </main>
    </div>
    </Layout>
  )
}

export default AboutUs
