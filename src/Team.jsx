import React from 'react'

const Team = () => {
  return (
    <>
      <div className='m-10 sm:m-12 lg:h-[64vh] flex items-center justify-center px-10'>
        <div className='flex flex-col md:flex-row lg:space-x-24 space-y-6 md:space-y-0'>
          <div className="flex-[2] flex flex-col text-left space-y-6 sm:space-y-8">
            <div className='font-semibold text-5xl sm:text-4xl md:text-5xl font-newsreader'>
              Meet Our Expert Team
            </div>
            <div className='font-light text-2xl sm:text-xl'>
              At Pinnacle, we take a holistic approach to college admissions and academic excellence. Our team is more than just a group of experts — we are mentors, strategists, and dedicated advocates for student success. We understand that every student has a unique story to tell, and we are here to help craft that story into a compelling application that stands out.
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-black mb-10 w-1/2 mx-auto" />

      <div className='flex flex-col m-20 space-y-5'>
        <div className='font-semibold text-3xl font-newsreader'>Meet Aileen
        </div>
        <div className='font-light text-2xl sm:text-xl'>As a parent who has successfully navigated the college admissions process, Aileen brings firsthand experience and insight into what it takes to help students succeed. She has built strong connections with local schools, allowing her to provide tailored guidance and strategic networking opportunities for students seeking admissions support.</div>
      </div>
      <div className='flex flex-col m-20 space-y-5'>
        <div className='font-semibold text-3xl font-newsreader'>Meet Deaner
        </div>
        <div className='font-light text-2xl sm:text-xl'>With over 25 years of experience guiding students through the college admissions process, Deaner is a seasoned professional writer and a premium SAT & ACT tutor. He has worked with some of the most prestigious test prep companies, helping students achieve top scores and secure admissions to elite universities. His expertise in crafting compelling personal statements and application essays ensures that every student presents their best self to admissions committees.</div>
      </div>
    </>

  )
}

export default Team