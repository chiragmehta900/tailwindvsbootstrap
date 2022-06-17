import React from 'react'

const Comparison = () => {
    return (
        <div className='py-20'>
            <div>
                <h2 className='font-bold text-5xl capitalize text-center'>Tailwind CSS vs Bootstrap</h2>
            </div>
            <div className='grid grid-cols-3 space-x-1 my-14'>
                <h2 className='text-center font-bold text-2xl'>Tailwind CSS</h2>
                <h2 className='text-center font-bold text-3xl text-[#8493A8]'>V/S</h2>
                <h2 className='text-center font-bold text-2xl'>Bootstrap</h2>
            </div>
            <div className='grid grid-cols-3 space-x-1 mt-5 border-b border-[#313E53]/70 pb-5'>
                <p className='text-center font-normal'>Tailwind offers predesigned widgets to build a site from scratch with fast UI development.</p>
                <p></p>
                <p className='text-center font-normal'>Bootstrap comes with a set of pre-styled responsive, mobile-first components that possess a definite UI kit.</p>
            </div>
            <div className='grid grid-cols-3 space-x-1 mt-5 border-b border-[#313E53]/70 pb-5'>
                <p className='text-center font-normal'>Tailwind CSS uses a set of utility classes to create a neat UI with more flexibility and uniqueness.</p>
                <p></p>
                <p className='text-center font-normal'>Sites created using Bootstrap follow the generic pattern that makes them look identical.</p>
            </div>
            <div className='grid grid-cols-3 space-x-1 mt-5 border-b border-[#313E53]/70 pb-5'>
                <p className='text-center font-normal'>Websites created using Tailwind CSS are much more customizable.</p>
                <p></p>
                <p className='text-center font-normal'>Websites created with Bootstraps are known for their responsiveness and flawless design, but the looks are generic and similar.</p>
            </div>
            <div className='grid grid-cols-3 space-x-1 mt-5 border-b border-[#313E53]/70 pb-5'>
                <p className='text-center font-normal'>Tailwind CSS is relatively newer, and there is still much room to grow in terms of its community, however, it is growing day by day, and the number of users, references, tools, and websites related to it are also increasing.</p>
                <p></p>
                <p className='text-center font-normal'>Bootstrap is efficient and saves a lot of time. It has been around for more than nine years and being the most popular CSS Framework, it has a large community of developers, forums, tools, and so on.</p>
            </div>
            <div className='grid grid-cols-3 space-x-1 mt-5 border-b border-[#313E53]/70 pb-5'>
                <p className='text-center font-normal'>Tailwind CSS only needs the base stylesheet file, which amounts up to 27kb making it lighter.</p>
                <p></p>
                <p className='text-center font-normal'>Bootstrap has four files that are required to include in your project to get the full benefit of the CSS Framework. The total size of these files is 308.25kb including, jQuery, Popper.js, Bootstrap JS, and the main Bootstrap CSS file.</p>
            </div>
            <div className='grid grid-cols-3 space-x-1 mt-5 pb-5'>
                <p className='text-center font-normal'>Tailwind CSS is used by BlaBlaCar, Exyplis, and Bazzite.</p>
                <p></p>
                <p className='text-center font-normal'>Spotify, Twitter, and Lyft are some of the famous companies that use Bootstrap.</p>
            </div>
        </div>
    )
}

export default Comparison