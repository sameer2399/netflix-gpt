const VideoTitle = ({title, overview}) => {

  return (
    <div className="w-screen aspect-video pt-[17%] px-[3%] absolute text-white bg-gradient-to-r from-black sm:bottom-1 sm:left-0 sm:pt-[50%]">
      <h1 className="text-5xl font-bold sm:text-sm">{title}</h1>
      <p className="py-6 text-sm w-1/3 sm:hidden">{overview}</p>

      <div>
        <button className=" bg-white rounded-lg text-black p-3 px-12 text-xl hover:bg-opacity-80 sm:px-4 sm:text-xs"> ▶ Play</button>
        <button className="mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white p-3 px-12 text-xl hover:bg-opacity-80 sm:px-4 sm:text-xs">ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;