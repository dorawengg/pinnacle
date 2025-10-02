import React from 'react'
import wechatQR from '../assets/wechat.png'
import logo from '../assets/pinnacleLogo.png'

function Footer() {
  return (
    <div className="bg-[#396D8C] w-full px-6 sm:px-10 md:px-16 py-10 text-black">

      {/* Top row - hidden on mobile */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

        {/* Contact Us */}
        <div>
          <div className="font-semibold text-xl text-[#F9E3B1]">Contact Us</div>
          <p className="mt-2">
            50 Jericho Turnpike,<br />
            Jericho, NY 11753<br />
            aileen.pinnacleducation@gmail.com<br />
            516.246.9688
          </p>
        </div>

        {/* Mailing List */}
        <div>
          <div className="font-semibold text-xl text-[#F9E3B1]">Sign Up For Our Mailing List</div>
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
          <div className="font-semibold text-xl text-[#F9E3B1]">Ready to start your journey?</div>
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
          <div className="font-semibold text-xl text-[#F9E3B1]">Join Our Community on WeChat</div>
          <img src={wechatQR} alt="WeChat QR Code" className="mt-2 w-32 h-32 object-cover" />
        </div>
      </div>

      {/* Bottom row - always visible */}
      <div className="flex flex-col items-center space-y-2 text-center">
        <img src={logo} alt="Pinnacle Edu Logo" className="h-12" />
        <div className="text-sm">© 2025 Pinnacle Edu</div>
      </div>
    </div>
  )
}

export default Footer
