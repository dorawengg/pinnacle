import React from 'react'

const Tutoring = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='m-10 sm:m-12 lg:h-[70vh] flex items-center justify-center px-10'>
        <div className='flex flex-col md:flex-row lg:space-x-24 space-y-6 md:space-y-0'>
          <div className="flex-[2] flex flex-col text-left space-y-6 sm:space-y-8">
            <div className='font-semibold text-5xl sm:text-4xl md:text-5xl font-newsreader'>
              Elevate Your Academic Performance with Expert Tutoring & Test Prep
            </div>
            <div className='font-light text-2xl sm:text-xl '>
              Success in high school and standardized testing requires more than just hard work—it demands expert guidance, strategic preparation, and personalized support. At Pinnacle, we provide top-tier tutoring and test prep to help students excel in their coursework, ace their exams, and gain a competitive edge in academic competitions.
            </div>
          </div>
        </div>
      </div>

      {/* Tutoring & Test Prep Section */}
      <div className='flex flex-col bg-[#396D8C] sm:p-18 p-20 space-y-10 text-white'>
        <div className='flex sm:flex-col flex-row sm:space-y-10 '>
          {/* Tutoring */}
          <div className='flex flex-col flex-1 text-xl sm:text-lg space-y-4 md:mr-5 lg:mr-5'>
            <div className="text-3xl sm:text-3xl font-newsreader">Tutoring</div>
            <div>Our expert tutors provide personalized instruction across all high school courses:</div>
            <ul className='list-disc ml-5 space-y-2'>
              <li>Mathematics: Algebra, Geometry, Pre-Calculus, Calculus, Statistics</li>
              <li>Sciences: Biology, Chemistry, Physics</li>
              <li>English & Humanities: Literature, Writing, History, Economics</li>
              <li>Foreign Languages: Spanish, French, Mandarin, and more</li>
            </ul>
          </div>

          {/* Test Prep */}
          <div className='flex flex-col flex-1 text-xl sm:text-lg space-y-4'>
            <div className="text-3xl sm:text-3xl font-newsreader">Test Prep</div>
            <div>We offer specialized prep for:</div>
            <ul className='list-disc ml-5 space-y-2'>
              <li>SAT & ACT: Master critical reading, math, writing, and science reasoning skills to boost your scores.</li>
              <li>SSAT & ISEE: Prepare for private school admissions with tailored strategies and practice exams.</li>
              <li>Advanced Placement (AP) Exams: Excel in AP courses and earn college credit with expert-guided preparation.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Competition Prep Section */}
      <div className='flex flex-col m-20 space-y-5 text-base sm:text-lg '>
        <div className='font-semibold text-3xl sm:text-3xl font-newsreader'>Competition Prep</div>
        <div className='text-xl sm:text-lg '>
          Stand out by excelling in prestigious academic competitions. Our expert coaches provide targeted training for:
        </div>
        <ul className='list-disc ml-5 space-y-2 text-xl'>
          <li>Mathematics: AMC 8, AMC 10, AMC 12, AIME</li>
          <li>Science: Physics Olympiad, Chemistry Olympiad, Biology Olympiad</li>
          <li>Computer Science: USACO (USA Computing Olympiad)</li>
          <li>Literature: Scholastic Art & Writing Awards</li>
        </ul>
      </div>
    </>
  )
}

export default Tutoring
