import React from 'react';
import './App.css';
import vid1 from './video-1@c.mp4';
import { useNavigate } from 'react-router-dom';
import UserDetails from './UserDetails';


const urllinkedin='https://www.linkedin.com/in/ishanrajpurohit21/'
const MyWork = (props) => {
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
      <main className="bg-gray-700 flex h-screen text-white bg-opacity-80">
        
       
          <div className="my-6 px-14 py-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold bg-gray-600 backdrop-blur-3xl bg-opacity-60 rounded-2xl">
            Coming Soon!
      
          </div>
          <div>
          
            <video src={vid1} className="absolute top-0 left-0 -z-10 h-screen w-full object-cover py-0" loop autoPlay muted></video>
          </div>
          
          
         
        
      </main>
    </div>
  );
};

export default MyWork;