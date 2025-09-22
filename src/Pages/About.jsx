import React from 'react';
import bio from '../assets/bio.jpg'; 
import MainProject from '../Others/MainProject';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 py-[100px] h-full">
      <style>
        {`
        /* Webkit-based browsers (Chrome, Safari, etc.) 
        .scroll-container::-webkit-scrollbar {
            display: none;
        }

        .scroll-container {
            scrollbar-width: none;
        }

        .scroll-container {
            -ms-overflow-style: none;
        }
        `}
      </style>
      <div className="flex-1 overflow-y-auto scroll-container bg-white p-6 sm:p-8 rounded-2xl ">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">About Me</h1>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <p className='tracking-normal text-lg'>I love sharing what I know to help web designers, developers and other entrepreneurs grow as freelancers and build online businesses.</p>
          <br></br>
          <p className='tracking-normal text-lg'>Trying to make "<span className='font-semibold text-gray-600'>Hello World</span>" the new "<span className='font-semibold text-gray-600'>AI</span>".

I’m Md Hasnain a BCA graduate with a passion for technology problem-solving and building solutions that make an impact. I love exploring new tools developing applications and staying updated with the latest trends in the tech world.</p>
<p  className='tracking-normal text-lg'><br></br>
 My technical toolkit includes HTML, CSS, JavaScript, React.js, Tailwind CSS, Java, Python, C/C++, PHP, .NET and databases like SQL and Firebase. I also bring over 2 years of SEO experience, 1+ year of WordPress experience and 1 year of professional web development experience delivering online projects and helping clients grow their digital presence.
</p>


      <p className='tracking-normal text-lg'> <br></br>
       I actively engage in Leadership and Organizational Management, Participating in NSS and Contributing to more than 10 events, gaining Experience in Teamwork, Coordination, and Event Execution.
        </p>
       <ul className="list-disc list-inside space-y-2 font-inter text-base text-gray-800">
        <p className='text-center tracking-normal text-lg font-semibold'>I have also participated in hackathons and college projects:</p>
  <li className='tracking-normal text-lg'>
    <strong>Petrovista 2025:</strong> By the Finance Investment Cell, GEU x SPE GEU.
  </li>
  <li className='tracking-normal text-lg'>
    <strong>Open Model Hackathon 2025:</strong> Built a “<span className='font-semibold text-gray-600'>Smart AI Assistant</span>” an AI-powered chatbot using React Tailwind CSS and Gemini API deployed live and submitted solo among 7900+ global participants.
  </li>
  <li className='tracking-normal text-lg'>
    Contributed to college projects by designing posters banners and visual content enhancing communication and creative skills.
  </li>
</ul>
<br></br>

<p className='tracking-normal text-lg'>
  Beyond tech and Leadership I bring strong Communication, Time Management, Problem-solving Abilities and a Growth mindset to every project. I enjoy Collaborating in Dynamic teams and tackling challenges that push me to learn and innovate.
</p>
<br></br>
<p className='tracking-normal text-lg'>
  Outside of Tech, I am a Tea Lover 
Outside the world of code and algorithms, I find comfort in a good cup of tea — it’s my go-to creative fuel.⚡😁
</p>
<br></br>
<strong>
  Thank You!
</strong>

<br></br>
  <div className="aspect-w-16 aspect-h-24 ">
        <iframe
  className="w-full h-[60vh] rounded-lg"
  src="https://www.youtube.com/embed/oUpC9KTK0rg?start=125
" // <-- correct embed URL
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      </div>
<br></br> 
<br></br> 
<br></br> 
<br></br> 
<br></br> 
<br></br> 

        <MainProject/>
        </div>

      </div>

      <div className="flex-none w-full md:w-96 bg-white p-6 sm:p-8 rounded-2xl  border border-blue-200 flex flex-col items-center text-center md:sticky md:top-20 md:self-start">
        <img className="w-45 h-45 sm:w-35 sm:h-35 rounded-full  object-cover mb-5 sm:mb-7" src={bio} alt="Profile Picture" />
        <h2 className="text-2xl sm:text-xl font-bold mb-2 text-gray-900">Hi, I’m Md Hasnain🙂</h2>
        <p className="text-sm sm:text-base text-gray-800 mb-6">Web Developer, Freelancer & Problem-Solver</p>
        <div className="text-gray-700">
        </div>
      </div>



    </div>
  );
};

export default About;
