const VideoTitle = ({title, overview}) => {

  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/4">{overview}</p>

      <div className="my-4 md:m-0">
        <button className=" bg-white rounded-lg text-black  md:py-4 py-1 md:px-8 px-3 text-xl hover:bg-opacity-80 "> ▶ Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white py-4 px-8 text-xl hover:bg-opacity-80">ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;