import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
     <div className='flex flex-col gap-4 mx-9 '>

      {/* TODO: Need to change the colour of text black to white */}
      <div>
      <h1 className='text-2xl md:text-6xl font-bold '>
            {title}
        </h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{description}</p>
      </div>

      <div className='flex gap-4 my-4 md:m-0'>
      <button  className=" bg-gray-500 text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80 cursor-pointer">  ▶️ Play</button>
      <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle