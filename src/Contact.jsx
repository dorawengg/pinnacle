import React from 'react'
import wechatQR from './assets/wechat.png' // <- you need this import

const Contact = () => {
  return (
    <div className="min-h-screen px-6 sm:px-10 md:px-16 py-10 bg-[#f5f5f5] space-y-10">

      {/* Contact Info */}
      <div>
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <div className="text-lg text-gray-800 space-y-4">
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
  )
}

export default Contact
