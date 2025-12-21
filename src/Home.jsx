import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import aileen from './assets/aileen.png'

function Home() {

  return (
    <>
      <div className="m-20 h-auto flex items-center justify-center lg:m-10 lg:h-[70vh] lg:px-10">
        <div className="flex flex-col lg:flex-row lg:space-x-24 space-y-8 lg:space-y-0">
          <div className="flex-[2] flex flex-col text-left space-y-5 sm:space-y-8">
            <div className="font-semibold text-3xl sm:text-4xl lg:text-5xl font-newsreader">
              Your Child's Future Starts Here: Personalized Guidance for College Success
            </div>
            <div className="font-light text-lg sm:text-xl lg:text-2xl">
              With over 10 years of proven success, we help students craft unique narratives, excel academically, and gain a competitive edge in the college admissions process.
            </div>
          </div>
          <div className="flex-[1] flex flex-col text-left text-lg sm:text-xl justify-end space-y-3 lg:space-y-0">
            <a href="/Tutoring"><div className='underline'>Explore Our Programs</div></a>
            <a href="/Contact"><div className='underline'>Book Your Appointment</div></a>
          </div>
        </div>
      </div>


      <div className='flex flex-col bg-[#396D8C] text-white'>
        <div className='mt-20 mb-20 m-10 px-10 space-y-5'>
          <div className='font-semibold text-4xl font-newsreader'>It Pays to Start Early.</div>
          <div className='text-xl'>Investing in your child's education early lays the foundation for long-term success. With elite colleges costing over $400,000 for four years, starting now gives your child a competitive edge in academics, extracurriculars, and admissions.
            Our Minor League Program nurtures young talents, building skills and confidence while identifying each child’s unique strengths—ensuring they stand out as exceptional candidates in the competitive college landscape.
          </div>
        </div>

      </div>

      <div className='flex flex-col m-20 text-xl space-y-5'>
        <div className='font-semibold text-5xl font-newsreader'>
          Why Us?
        </div>
        <div>
          Crafting Futures, One Unique Path at a Time
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className=''>
            <div className='font-bold'>10+ Years of Experience</div>
            <div>Over a decade of helping students navigate the complex college admissions process, with a 95% success rate in placing students in their top-choice colleges.</div>
          </div>
          <div className=''>
            <div className='font-bold'>Exceptional Results</div>
            <div>85% of our students have been admitted to top 50 universities, including Ivy League schools and other elite institutions.</div>
          </div>
          <div className=''>
            <div className='font-bold'>Individualized Attention</div>
            <div>We take the time to deeply understand each student—their strengths, passions, and goals—to craft a personalized strategy that maximizes their potential.</div>
          </div>
          <div className=''>
            <div className='font-bold'>Comprehensive Programs</div>
            <div>Our programs cover every stage of academic and admissions success, with over 90% of students showing significant improvement in standardized test scores and subject mastery.</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-[#396D8C] p-20 space-y-5 text-white'>
        <div className='font-semibold text-5xl font-newsreader'>Our Programs</div>
        <div className='text-xl'>
          Start building your child's future today with personalized guidance and proven strategies.
        </div>

        <div className='flex flex-col lg:flex-row content-center lg:divide-x lg:divide-white sm:space-y-5'>
          <div className='flex flex-col flex-1 text-xl lg:pr-10'>
            <div className="text-2xl flex justify-center">Consulting</div>
            <ul className='list-disc m-5'>
              <li>College Admissions Consulting</li>
              <li>Essay Writing</li>
              <li>Interview Prep</li>
              <li>Application Strategy</li>
              <li>Financial Aid</li>
            </ul>
            <div className="flex justify-center">
              <button className="bg-[#001F3F] text-white rounded-xl px-6 py-3 hover:bg-[#003366] transition shadow">
                Schedule a consultation now
              </button>
            </div>
          </div>

          <div className='flex flex-col flex-1 text-xl lg:pl-10'>
            <div className="text-2xl flex justify-center">Academic Support</div>
            <ul className='list-disc m-5'>
              <li>Academic Enrichment</li>
              <li>Homework Help</li>
              <li>AP Support</li>
              <li>Standardized test prep (SAT, ACT, SSAT, etc)</li>
              <li>Academic competitions (AMC, USACO, IPhO, etc)</li>
            </ul>
            <div className="flex justify-center">
              <button className="bg-[#001F3F] text-white rounded-xl px-6 py-3 hover:bg-[#003366] transition shadow">
                View our current offerings
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className='flex flex-col m-20 space-y-5 '>
        <div className='font-semibold text-4xl font-newsreader'>Proven Results: By the Numbers</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-base sm:text-lg lg:text-xl'>
          <div className='flex flex-col flex-1'>
            <div className='font-bold text-xl'>Acceptance Rate: </div>
            <div>85% of our students are admitted to top 50 colleges, including Ivy League schools, MIT, and Stanford.</div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='font-bold text-xl'>Score Boost: </div>
            <div>On average, students increase their SAT scores by 200-300 points, ACT scores by 10 points, making them competitive applicants for elite colleges.</div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='font-bold text-xl'>Advisor-to-Student Ratio: </div>
            <div>Each student receives personalized attention with a 3:1 advisor-to-student ratio, ensuring a tailored approach to their success.</div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='font-bold text-xl'>Academic Improvement: </div>
            <div>90% of students show measurable improvement in core academic skills through our enrichment programs.</div>
          </div>
        </div>
      </div>

      <hr className="border-t border-black my-10 w-1/2 mx-auto" />

      <div className='flex flex-col m-20 space-y-5'>
        <div className='font-semibold text-4xl font-newsreader'>Who You're Working With</div>
        <div className='flex flex-row space-x-20 sm:flex-col sm:space-y-5 sm:items-start'>
          <div className='flex-[2] text-xl'>
            At the heart of our programs is a team of passionate, experienced educators dedicated to your child’s success. Our teachers aren’t just experts in their fields—they are mentors who take the time to understand each student’s unique potential and guide them every step of the way.
            <br /><br />
            With decades of combined experience, advanced degrees from top universities, and a deep commitment to fostering growth, our team is here to inspire, challenge, and empower your child to excel academically and beyond.
            <br /><br />
            <button>Meet Our Teachers</button>
          </div>
          <div className='flex flex-col flex-[1] sm:hidden'>
            <img src={aileen} alt="Aileen" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
