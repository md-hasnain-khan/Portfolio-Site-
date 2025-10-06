import React from 'react'
import NumberOfPorject from '../Others/NumberOfPorject'
import ProjectCard from '../Others/ProjectCard'

const Project = () => {
  return (
    <>
<div className='w-full h-screen flex flex-col  px-4 py-20'>
  <div  className='w-full h-20  flex justify-between'>

<div className=' flex items-center px-10'>
         <NumberOfPorject/>
   </div>

 <div className=' flex items-center  cursor-pointer px-10' >
<span className='material-symbols-outlined' >
share
</span>
    </div>

  </div>



  <div className='w-full h-50 mt-22 flex   flex-col justify-center items-center px-10'>
<h1 className='text-[180px]  font-semibold text-center'>
  PROJECT PAGE
</h1> 
 <p className='tracking-normal text-lg w-[1200px]  text-center '>Take a look at my latest projects that highlight creativity quality and attention to detail. Each project reflects my dedication to delivering results that meet client expectations. Explore and see how I bring ideas to life!</p>
  </div>

    </div>
 <div className='w-full px-12'> 

  <ProjectCard/>
 </div>
    </>
  )
}

export default Project
