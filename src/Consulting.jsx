import React from 'react'

const Consulting = () => {
  return (
    <>
      <div className='m-10 h-[70vh] flex items-center justify-center px-10'>
        <div className='flex flex-row space-x-24'>
          <div className="flex-[2] flex flex-col text-left space-y-8">
            <div className='font-semibold text-5xl font-newsreader'>Our Approach</div>
            <div className='font-light text-2xl'>Navigating college admissions requires more than just good grades—it demands a strategic, long-term approach. At Pinnacle, we help students craft a compelling personal narrative that highlights their unique strengths and passions, setting them apart in an increasingly competitive landscape.</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-[#396D8C] p-20 space-y-5 text-white'>
        <div className=' text-3xl font-newsreader'>Personalized Pathways to College Success</div>
        {/* List */}
        <ul className="list-disc list-inside space-y-6">
          <li className="text-2xl">Free 30-Minute Consultation</li>
          <p className="border-l-2 border-white pl-4 text-lg mt-2">
            Start with a personalized consultation where we’ll assess your goals and outline a custom roadmap to help you succeed in the admissions process.
          </p>

          <li className="text-2xl">Strategic Academic & Extracurricular Planning</li>
          <p className="border-l-2 border-white pl-4 text-lg mt-2">
            We will work with your goals to plan out high school courses as well as extracurriculars and set you apart from other applicants.
          </p>

          <li className="text-2xl">College Application Guidance

          </li>
          <p className="border-l-2 border-white pl-4 text-lg mt-2">
            From crafting a standout personal statement to refining supplemental essays and securing strong recommendations, we’ll ensure every aspect of your application is polished and compelling.
          </p>

          <li className="text-2xl">Tutoring & Test Prep</li>
          <p className="border-l-2 border-white pl-4 text-lg mt-2">
            Gain a competitive advantage with expert tutoring and test prep designed to maximize your academic potential and prepare you for standardized tests and academic competitions.
          </p>
        </ul>
      </div>

      <div className='flex flex-col m-20 text-xl space-y-5'>
        <div className='font-semibold text-2xl font-newsreader'>
          I'm interested! What's next?
        </div>
        <div>
          If you’re interested in our college counseling services, fill out our consultation form and we’ll be in touch.
        </div>
          <button className="bg-[#001F3F] text-white rounded-xl px-6 py-3 hover:bg-[#003366] transition shadow w-1/2 sm:w-full">
            Schedule a consultation now
            <span className="ml-2">→</span>
          </button>

      </div>


    </>

  )
}

export default Consulting
