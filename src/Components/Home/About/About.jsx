/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import Title from "../../Shared/Title/Title";
import aboutAnimation from '../../../assets/about.json'
import roundProfile from '../../../assets/round_profile.png';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  return (
    <div id="about" className="max-w-5xl mx-auto py-12 px-5 lg:px-0">
      <Title text="About Me" />
      <div className="flex flex-col-reverse md:flex-row items-center  gap-2">
        <div className="">
          <p className="max-w-md">
            <h1 className="text-2xl font-medium">Hey, I'm <span className="text-green-500">Mostak Ahmed</span>,</h1>
            <br/> A budding developer with a knack for
            Front-end, React, and MERN stack technologies.<br/> 
            <p>Currently on the journey to earn my B.Sc. in Electrical and Electronic Engineering (EEE) at Hajee Mohammad Danesh Science and Technology University</p>
          </p>
          <div className="mt-3 space-y-2">
            <p className=" flex items-center gap-1"><MdEmail className="text-green-500 text-2xl"/> mostak.ahm263@gmail.com</p>
            <p className=" flex items-center gap-1"><FaPhoneAlt className="text-green-500 text-2xl"/> +880 1705833263</p>
            <p className=" flex items-center gap-1"><FaLocationDot className="text-green-500 text-2xl"/> Rangpur, Bangladesh</p>
          </div>
        </div>
        <div className="w-1/2">
            {/* <Lottie animationData={aboutAnimation}/> */}
            <img src={roundProfile} className="w-1/2 mx-auto rounded-full shadow-xl shadow-green-500" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
