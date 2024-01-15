import React from 'react';
import './App.css';
import pic1 from './hi (2).png';
import vid1 from './video-1@c.mp4';
import { useNavigate } from 'react-router-dom';

const urllinkedin='https://www.linkedin.com/in/ishanrajpurohit21/'
const Home = (props) => {
    const navigate = useNavigate();
    return (   
    <div className="z-0">
      <nav className="bg-gray-700 bg-opacity-80 text-white flex justify-between hover:text-white">
      <button onClick={() => navigate("/")}><span className="text-xl flex items-center mx-3 font-extralight hover:font-semibold">
          Design | Develop | Live
        </span></button>
        <ul className="flex justify-end">
        <button onClick={() => navigate("/")}><li className="cursor-pointer hover:bg-gray-600 px-5 py-4">Home</li></button>
          <button onClick={() => navigate("/AboutMe")}><li className="cursor-pointer hover:bg-gray-600 px-5 py-4">About Me</li></button>
          <button onClick={() => navigate("/MyWork")}><li className="cursor-pointer hover:bg-gray-600 px-5 py-4">My Work</li></button>
          <button onClick={() => navigate("/Github")}><li className="cursor-pointer hover:bg-gray-600 px-5 py-4">Github</li></button>
          <li className="cursor-pointer hover:bg-gray-600 px-5 py-4" onClick={() => {window.open(urllinkedin,'_blank')}}>Connect</li>
        </ul>
      </nav>
      <main className="bg-gray-700 flex text-white bg-opacity-80 h-full">
        <div className="main h-96 py-24 pl-9">
          <div>
            <video src={vid1} className="absolute top-0 left-0 -z-10 h-full w-full object-cover" loop autoPlay muted></video>
          </div>
          <div className="text-8xl font-bold">Ishan Rajpurohit</div>
          <p className="pt-14 py-12 text-4xl font-thin text-white">
            Web Development & Graphic Design Enthusiast
          </p>
          <div className="buttons space-x-5">
            <button onClick={() => navigate("/MyWork")} className="bg-gray-800 text-white px-5 py-3 rounded-3xl hover:text-white hover:bg-gray-600">
              Portfolio
            </button>
            <button onClick={() => {window.open(urllinkedin,'_blank')}} className="bg-gray-800 text-white px-5 py-3 rounded-3xl hover:text-white hover:bg-gray-600">
              Connect
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <img src={pic1} alt="Background" />

        </div>
      </main>
    </div>
  );
};

export default Home;
