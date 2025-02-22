import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {

  return (
    <>
      <div className='m-10 h-[70vh] flex items-center justify-center px-10'>
        <div className='flex flex-row space-x-24'>
          <div className="flex-[2] flex flex-col text-left space-y-6">
            <div className='font-semibold text-3xl font-newsreader'>Your Child's Future Starts Here: Personalized Guidance for College Success</div>
            <div>With over 10 years of proven success, we help students craft unique narratives, excel academically, and gain a competitive edge in the college admissions process.</div>
          </div>
          <div className="flex-[1] flex flex-col text-left justify-end">
            <div>Explore Our Programs</div>
            <div>Book Your Appointment</div>
          </div>
        </div>
      </div>

      <div className=' h-[50vh] flex flex-col bg-[#396D8C]'>
        <div className='m-10 px-10'>
          <div className='font-semibold text-3xl font-newsreader'>It Pays to Start Early.</div>
          <div className=''>Investing in your child's education early lays the foundation for long-term success. With elite colleges costing over $400,000 for four years, starting now gives your child a competitive edge in academics, extracurriculars, and admissions.
            Our Minor League Program nurtures young talents, building skills and confidence while identifying each child’s unique strengths—ensuring they stand out as exceptional candidates in the competitive college landscape.
          </div>
        </div>

      </div>

      <div className='flex flex-col m-10'>
        <div className='font-semibold text-3xl font-newsreader'>
          Why Us?
        </div>
        <div>
          Crafting Futures, One Unique Path at a Time
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='p-5 '>
            <div className='font-bold'>10+ Years of Experience</div>
            <div>Over a decade of helping students navigate the complex college admissions process, with a 95% success rate in placing students in their top-choice colleges.</div>
          </div>
          <div className='p-5 '>
            <div className='font-bold'>Exceptional Results</div>
            <div>85% of our students have been admitted to top 50 universities, including Ivy League schools and other elite institutions.</div>
          </div>
          <div className='p-5 '>
            <div className='font-bold'>Individualized Attention</div>
            <div>We take the time to deeply understand each student—their strengths, passions, and goals—to craft a personalized strategy that maximizes their potential.</div>
          </div>
          <div className='p-5 '>
            <div className='font-bold'>Comprehensive Programs</div>
            <div>Our programs cover every stage of academic and admissions success, with over 90% of students showing significant improvement in standardized test scores and subject mastery.</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col m-10'>
        <div className='font-semibold text-3xl font-newsreader'>Our Programs</div>
        <div>Start building your child's future today with personalized guidance and proven strategies.</div>
        <div className='flex flex-row content-center'>
          <div className='flex flex-col'>
            <div>Consulting</div>
            <ul>
              <li>College Admissions Consulting</li>
              <li>Essay Writing</li>
              <li>Interview Prep</li>
              <li>Application Strategy</li>
              <li>Financial Aid</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <div>Academic Support</div>
            <ul>
              <li>Academic Enrichment</li>
              <li>Homework Help</li>
              <li>AP Support</li>
              <li>Standardized test prep (SAT, ACT, SSAT, etc)</li>
              <li>Academic competitions (AMC, USACO, IPhO, etc)</li>
            </ul>
          </div>

        </div>
      </div>

      <div className='flex flex-col m-10'>
        <div className='font-semibold text-3xl font-newsreader'>Proven Results: By the Numbers</div>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <div>Acceptance Rate: </div>
            <div>85% of our students are admitted to top 50 colleges, including Ivy League schools, MIT, and Stanford.</div>
          </div>
          <div className='flex flex-col'>
            <div>Score Boost: </div>
            <div>On average, students increase their SAT scores by 200-300 points, ACT scores by 10 points, making them competitive applicants for elite colleges.</div>
          </div>
          <div className='flex flex-col'>
            <div>Advisor-to-Student Ratio: </div>
            <div>Each student receives personalized attention with a 3:1 advisor-to-student ratio, ensuring a tailored approach to their success.</div>
          </div>
          <div className='flex flex-col'>
            <div>Academic Improvement: </div>
            <div>90% of students show measurable improvement in core academic skills through our enrichment programs.</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col m-10'>
        <div className='font-semibold text-3xl font-newsreader'>Who You're Working With</div>
        <div className='flex flex-row'>
          <div className='flex-[2]'>
            At the heart of our programs is a team of passionate, experienced educators dedicated to your child’s success. Our teachers aren’t just experts in their fields—they are mentors who take the time to understand each student’s unique potential and guide them every step of the way.

            With decades of combined experience, advanced degrees from top universities, and a deep commitment to fostering growth, our team is here to inspire, challenge, and empower your child to excel academically and beyond.
          </div>
          <div className='flex flex-col flex-[1]'>
            <div>IMAGE</div>
            <div>Meet Our Teachers</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
