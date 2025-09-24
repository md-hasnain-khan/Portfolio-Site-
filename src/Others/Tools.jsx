import React from 'react'
import vscode from '../assets/vscode.png'; 
import IntelliJIDEA from '../assets/IntelliJIDEA.png'; 
import VisualStudio from '../assets/VisualStudio.png'; 
import figma from '../assets/figma.png'; 
import AndroidStudio from '../assets/AndroidStudio.png'; 
import AdobePremierePro from '../assets/AdobePremierePro.png'; 
import github from '../assets/github.png'; 

const tools = [
  { src: vscode, alt: "VSCode" },
  { src: figma, alt: "Figma" },
  { src: IntelliJIDEA, alt: "IntelliJ IDEA" },
  { src: VisualStudio, alt: "Visual Studio" },
  { src: AndroidStudio, alt: "Android Studio" },
  { src: AdobePremierePro, alt: "Adobe Premiere Pro" },
  { src: github, alt: "GitHub" }
];

const Tools = () => {
  return (
    <>
      <style>
        {`
        .tools-scroll::-webkit-scrollbar {
          display: none;
        }
        .tools-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        @keyframes scrollTools {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-wrapper {
          display: flex;
          width: max-content;
          animation: scrollTools 20s linear infinite;
          animation-delay: 3s;
        }

        .scroll-wrapper:hover {
          animation-play-state: paused;
        }
        `}
      </style>

      <h1 className='font-semibold text-medium'>Tools I Use</h1>
      <hr className="border-t-[1px] border-[#3B0270] my-4" />

      <div className="tools-scroll overflow-hidden whitespace-nowrap py-4">
        <div className="scroll-wrapper">
          {tools.map((tool, index) => (
            <img key={`tool-${index}`} src={tool.src} alt={tool.alt} className="w-32 h-auto object-contain mx-6" />
          ))}
          {tools.map((tool, index) => (
            <img key={`tool-duplicate-${index}`} src={tool.src} alt={tool.alt} className="w-32 h-auto object-contain mx-6" />
          ))}
        </div>
      </div>
    </>
  )
}

export default Tools;
