import React from 'react'
import about from '../assets/about.png'; 
import Skills from '../Others/Skill';
const Home = () => {
  return (
   <> 
<div className='w-full h-screen flex flex-col justify-center items-center text-center px-4'>

  <h1 className='text-6xl  font-bold mb-4'>
    Hi, I'm Hasnain <span className='text-[#FAA533]'>Web Developer</span>
  </h1>

  <p className=' text-lg md:text-xl text-gray-700 mb-6 max-w-xl'>
    I build modern, responsive websites and web apps that help businesses grow.
  </p>
  <div className='flex flex-col sm:flex-row gap-4'>
    <input 
      type='email' 
      placeholder='Enter your email' 
      className='px-5 py-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6F00FF] w-130'
    />
    <button className='text-xl  font-semibold px-10 py-3 bg-[#6F00FF] text-white rounded hover:bg-[#5700BF] transition-colors duration-200 '>
      Subscribe
    </button>
    
  </div>

</div>


                                                         {/*......................short About Me....................*/ }
 
<div className="w-full mx-auto py-20 px-16  flex flex-col md:flex-row items-center gap-8">
  
               {/* -----Left Content------*/}

  <div className="flex-1 text-center md:text-left">
  <p className="text-base font-bold text-gray-400 mb-1 font-sans">ABOUT ME</p>
   <h1 className='text-5xl font-bold font-sans'>Hey, I'm Hasnain 👋</h1>

    <p className="text-lg text-gray-600 mt-6 font-medium ">
     I'm a Freelancer, Web Developer, Content Creator, SEO Expert and WordPress Developer.<br />
    </p>
    <p className='text-lg text-gray-600 mb-4 font-medium'>
      I enjoy building modern websites and helping businesses grow with creative web solutions.
    </p>
    <a 
      href="/about" 
  className="text-base inline-block px-4 py-2 bg-[#0D1164] text-white font-semibold rounded hover:bg-[#0D1164] transition-colors duration-200"
    >
      Read More→
    </a>

       {/* -----Social Media---- */}

<div className="flex gap-2 mt-3">

  <a 
   href="https://x.com/hasnain01k" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482 13.94 13.94 0 01-10.11-5.13 4.917 4.917 0 001.523 6.573A4.897 4.897 0 01.96 9.713v.062a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.919 4.919 0 004.59 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/></svg>
      </a>

  <a 
    href="https://www.linkedin.com/in/md-hasnain-037781366/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 border-2 border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 24h4.55V7.98H.22V24zm7.2-16.02h4.36v2.16h.06c.61-1.16 2.1-2.38 4.32-2.38 4.63 0 5.48 3.04 5.48 6.99V24h-4.55v-6.94c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.66V24H7.42V7.98z"/></svg>
    </a>

  <a 
    href="https://www.youtube.com/@CodeWithPavilion" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center  w-10 h-10 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M23.498 6.186a2.997 2.997 0 00-2.114-2.115C19.62 3.5 12 3.5 12 3.5s-7.62 0-9.384.571a2.997 2.997 0 00-2.114 2.115A31.584 31.584 0 000 12a31.584 31.584 0 00.502 5.814 2.997 2.997 0 002.114 2.115C4.38 20.5 12 20.5 12 20.5s7.62 0 9.384-.571a2.997 2.997 0 002.114-2.115A31.584 31.584 0 0024 12a31.584 31.584 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    </a>

</div>

  </div>


           {/* ----Right Image---- */}
  <div className="flex-1 flex justify-center md:justify-end">
       
       <img src={about} alt='khan'   className='w-110 h-110 object-cover rounded-xl border-1 border-[#0BA6DF] shadow-lg'/>
 
      </div>
</div>

   <Skills></Skills>

</>
   
  )
}

export default Home
