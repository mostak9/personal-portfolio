import { Card, Typography } from "@material-tailwind/react";

import profile from "../../../assets/profile.jpg";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Card className="h-[calc(100vh)] fixed top-0 z-10 w-full max-w-[20rem]  shadow-xl shadow-blue-gray-900/5">
        <div className="w-full h-32 bg-green-500"></div>
        <div className="w-full  -mt-16 ">
          <img
            src={profile}
            className="w-36 h-36 mx-auto rounded-full border-8 border-white"
            alt=""
          />
        </div>

        <div className="flex items-center flex-col gap-2 mt-6">
          <NavLink>Home</NavLink>
          {/* <NavLink to={'#about'}>About</NavLink> */}
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          {/* <NavLink to={'#projects'}>Projects</NavLink> */}
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div className="px-4 pb-10 absolute bottom-0 left-10 ">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-xs"
          >
            &copy; Copyright {currentYear} by Mostak Ahmed
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
