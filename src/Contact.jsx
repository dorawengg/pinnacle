import React from 'react'
import wechatQR from './assets/wechat.png' // <- you need this import

const Contact = () => {
  return (
    <>
      <div className='m-10 h-auto flex flex-col px-10'>
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <div className='font-light text-2xl mb-10 '>Ready to start your free consultation? Email or visit us in person to get started. </div>


        <div className='flex flex-row sm:flex-col'>
          <div className='flex flex-col grow space-y-8'>
            <div>
              <div className="text-lg text-gray-800">
                <p>50 Jericho Turnpike,<br />Jericho, NY 11753</p>
                <p>Email: <a href="mailto:aileen.pinnacleducation@gmail.com" className="underline">aileen.pinnacleducation@gmail.com</a></p>
                <p>Phone: <a href="tel:5162469688" className="underline">516.246.9688</a></p>
              </div>
            </div>

            {/* Mailing List */}
            <div>
              <div className="font-semibold text-xl">Sign Up For Our Mailing List</div>
              <div className="mt-2 flex items-center border-b border-black w-3/4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent outline-none w-full py-1 placeholder-black"
                />
                <span className="ml-2">→</span>
              </div>
            </div>


          </div>

          <div className='flex flex-col grow space-y-8'>
            {/* Start Journey */}
            <div>
              <div className="font-semibold text-xl">Ready to start your journey?</div>
              <div className="mt-2 flex items-center border-b border-black w-3/4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent outline-none w-full py-1 placeholder-black"
                />
                <span className="ml-2">→</span>
              </div>
            </div>

            {/* WeChat */}
            <div>
              <div className="font-semibold text-xl ">Join Our Community on WeChat</div>
              <img src={wechatQR} alt="WeChat QR Code" className="mt-2 w-32 h-32 object-cover" />
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Contact
