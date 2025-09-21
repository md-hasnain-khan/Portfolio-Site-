import React from 'react';

const skillsData = [
  { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JAVASCRIPT', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' }, 
  { name: 'React.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Node Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Java OOPs', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C/C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Firebase', image: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Photoshop', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Premiere Pro', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Android Studio', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Google Colab', image: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
  { name: 'Visual Studio', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
  { name: 'IntelliJ', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-plain.svg' },
  { name: 'PyCharm', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-plain.svg' },
];

const Skill = () => {
  return (
    
    <div className="flex flex-wrap justify-center gap-4 p-8">
     <h2 className="text-5xl font-bold mb-2">Skills</h2>

   <p className="text-base text-gray-600  mb-4">
  I have experience with modern frontend and backend technologies. 
  I specialize in creating responsive websites clean UI components 
  and scalable web applications using React,  and Tailwind CSS. 
  On the backend, I work with Node.js Express and MySQL to build 
  secure and efficient APIs.
       </p>

   {skillsData.map((skill, index) => (
  <div 
    key={index} 
    className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-md w-36 h-36 border-1 border-transparent transition-all duration-300 hover:border-blue-200 hover:scale-110"
  >
    <img 
      src={skill.image} 
      alt={`${skill.name} logo`} 
      className="w-12 h-12 mb-2 object-contain" 
    />
    <p className="text-base font-semibold text-gray-800 text-center">{skill.name}</p>
  </div>
))}
    </div>
  );
};

export default Skill;