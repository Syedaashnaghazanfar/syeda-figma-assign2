export default function Home() {
  return (
    <div className="bg-[#252B42] min-h-screen flex flex-col items-center">
      {/* navbar section */}
      <nav className="w-full py-8 flex px-12 space-x-12">
        <h3 className="text-white font-bold text-xl ml-[30px] hover:text-gray-300">BrandName</h3>
        {/* navigation text */}
        <div className="flex justify-between">
        <div className="text-white flex space-x-8 ml-[90px] mt-1">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Product</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
        {/* login n join us buttons */}
        <div className="space-x-6 ml-100 h-1">
            <a href="#" className="text-white py-2 px-4 rounded hover:bg-blue-400 ml-[600px]">Login</a>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">Join Us</button>
          </div>
        </div>
      </nav>
      
      {/* main content */}
      <div className="flex flex-col items-center text-center mt-16 pr-5">
        <p className="text-[#23A6F0] text-1xl mb-4 py-9">Welcome</p>
        <h1 className="text-white text-5xl font-bold mb-6">Selling on the</h1>
        <h1 className="text-white text-5xl font-bold mb-6">internet like a pro</h1>
        <p className="text-gray-300 text-lg mb-10">
          We know how large objects will act, but things on a <br /> small scale just do not act that way.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg  hover:bg-blue-400">Get Quote Now</button>
          <button className="border border-blue-500 py-3 px-8 rounded-lg text-blue-500  hover:bg-blue-400">Learn More</button>
        </div>
      </div>

      {/* cards section */}
      <div className="flex justify-center space-x-8 py-20 ">
        {/* card 1 */}
        <div className="bg-white p-6 w-80 hover:bg-gray-200 ">
          <div className="w-12 h-12 bg-red-200 mb-7 rounded-lg mt-5"></div>
          <h2 className="text-gray-800 font-bold text-xl mb-2">Training courses</h2>
          <div className="w-11 h-1 bg-red-500 "></div>
          <p className="text-gray-600 mt-6 mb-4">The gradual accumulation of information about atomic and small-scale behavior...</p>
        </div>
         {/* card 2 */}
        <div className="bg-white p-6 w-80 hover:bg-gray-200 ">
          <div className="w-12 h-12 bg-[#B9EAA8] mb-7  rounded-lg mt-5"></div>
          <h2 className="text-gray-800 font-bold text-xl mb-2">2,769 Online courses</h2>
          <div className="w-11 h-1 bg-red-500 "></div>
          <p className="text-gray-600 mt-6 mb-4">The gradual accumulation of information about atomic and small-scale behavior...</p>
        </div>
        {/* card 3 */}
        <div className="bg-[#23A6F0] p-6 w-80 hover:bg-blue-400 ">
          <div className="w-12 h-12 bg-white mb-7 rounded-lg mt-5"></div>
          <h2 className="text-white font-bold text-xl mb-2">Training courses</h2>
          <div className="w-11 h-1 bg-white "></div>
          <p className="text-white mt-6 mb-4">The gradual accumulation of information about atomic and small-scale behavior...</p>
        </div>
      </div>
    </div>
  );
}
