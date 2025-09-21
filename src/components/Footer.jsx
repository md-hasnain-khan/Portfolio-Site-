import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import footerlogo from '../assets/footerlogo.png'; 
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700 py-6 ">
    <div className=" py-10 px-16  grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">

{/* Brand Section */}
<div className=' flex items-center h-45 w-60'>
            <img src={footerlogo} alt='khan' className='h-10 w-auto' />
  
</div>



{/* Navigation Links */}
<div className="flex flex-col space-y-2 text-sm w-45 ">
  <h1 className='text-sm font-bold'>PAGES</h1>
<Link to='/project' className='text-black underline-offset-4 underline  text-lg  font-serif'>Project</Link>
        <Link to='/articles'className='text-black underline-offset-4 underline  text-lg  font-serif'>Articles</Link>
        <Link to='/course' className='text-black underline-offset-4 underline  text-lg  font-serif'>Course</Link>
        <Link to='/about' className='text-black underline-offset-4 underline  text-lg  font-serif'>About</Link>

</div>

<div className=" flex flex-col space-y-2 text-sm w-45">
  <h1 className='text-sm font-bold'>SOCIAL MEDIA</h1>
  <a href="https://www.instagram.com/" target="_blank" className='text-black underline-offset-4 underline  text-lg  font-serif hover:text-red-600'>Instagram</a>
  <a href="https://www.linkedin.com/in/md-hasnain-037781366/" target="_blank" className='text-black underline-offset-4 underline  text-lg font-serif'>Linkedin </a>
  <a href="https://x.com/hasnain01k" target="_blank" className='text-black underline-offset-4 underline  text-lg font-serif' >Twitter</a>
  <a href="https://www.youtube.com/@CodeWithPavilion" target="_blank" className='text-black underline-offset-4 underline  text-lg font-serif'>YouTube</a>
  <a href="https://dcpbtech.com/" target="_blank" className='text-black underline-offset-4 underline  text-lg font-serif'>Website</a>

</div> 


                       {/*  ......Contact Me......   */}
<div className=" flex flex-col space-y-2 text-sm w-auto">
  <h1 className='text-sm font-bold'>CONTACT US </h1>
  <p className='text-black text-lg font-serif'>Email: <spna>khanhasnainali21@gmail.com</spna></p>
  <p className='text-black text-lg font-serif'>Mob: <spna>91+9068328724</spna></p>
  <p className='text-black text-lg font-serif'>Location:</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.3001608688533!2d77.997856!3d30.2817751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bc65a33d06f%3A0x2e51a46a362140fb!2s13%2C%2013c%2C%20Turner%20Rd%2C%20Clement%20Town%2C%20Dehradun%2C%20Uttarakhand%20248002!5e0!3m2!1sen!2sin!4v1695159478101!5m2!1sen!2sin"
            className="w-auto h-35"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
       
</div>
</div>


               {/* ....................Copyright................. */}
<div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
© 2025 CodeWithPavilion. All rights reserved.
</div>
</footer>
    
    </>
  )
}

export default Footer;
