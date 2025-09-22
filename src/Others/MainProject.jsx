import React from 'react'

const MainProject = () => {
  return (
    <>
    <h1 className='font-semibold'>My Projects</h1>
<hr class="border-t-[1px] border-[#3B0270] my-4" />
<section className="max-w-7xl mx-auto p-4">
  <h2 className="text-3xl font-bold mb-6">My SEO Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Project Card */}
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <img
        src="seo-screenshot.png"
        alt="SEO Project Screenshot"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">WordPress SEO Project</h3>
        <p className="text-gray-700 mb-2">
          Optimized blog posts for WordPress, improved ranking from page 5 to page 1.
        </p>
        <p className="text-sm text-gray-500 mb-4">Keywords: WordPress SEO, Blogging, Google Ranking</p>
        <a
          href="https://yourblog.com"
          target="_blank"
          className="text-blue-600 hover:underline mr-4"
        >
          Live Blog
        </a>
        <a
          href="seo-screenshot.png"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Screenshot
        </a>
      </div>
    </article>
    {/* Repeat cards for other projects */}
  </div>
</section>


    </>
  )
}

export default MainProject
