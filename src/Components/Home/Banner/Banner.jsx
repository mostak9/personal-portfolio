/* eslint-disable react/no-unescaped-entities */

import { Button } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaPhoneAlt } from "react-icons/fa";
import bg from '../../../assets/background.svg'


const Banner = () => {
  
  return (
    <div className="w-full min-h-screen h-screen flex items-center relative justify-center bg-center bg-cover" style={{backgroundImage: `url(${bg})`}}>
      {/* <div className='w-full h-full absolute bg-blue-gray-400/70 -z-10'></div> */}
      <div className="space-y-3 w-full h-full bg-gray-900/60 flex items-center relative justify-center flex-col">
        <h1 className="text-4xl font-bold text-center text-green-400">Hi I'm</h1>
        <h1 className="text-5xl md:text-6xl font-bold text-center text-white">Mostak Ahmed</h1>
        <h1 className={`text-3xl text-center text-green-500 font-medium`} style={{color: ``}}>
        <TypeAnimation
        speed={50}
          sequence={[
            "Front-end Developer",
            1000,
            "React Developer", // Types 'One'
    
            1000, // Waits 1s
            "JavaScript Developer", // Deletes 'One' and types 'Two'
            
            2000, // Waits 2s
            "MERN Stack Developer", // Types 'Three' without deleting 'Two'
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.4rem", display: "inline-block", marginBottom: '16px' }}
        />
        </h1>
        <div className="flex items-center gap-3 justify-center mt-5">
          <a href="https://drive.google.com/file/d/19C8xftMdweZ1n-JeI8_itDe6MNPyCQ1G/view" target="_blank" rel="noreferrer"><Button variant="outlined" size="lg" className="flex items-center gap-1" color="light-green"><FaDownload/> Resume</Button></a>
          <Button  size="lg" className="flex items-center gap-1" color="light-green"><FaPhoneAlt/> Contact</Button>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
