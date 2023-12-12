import Title from "../../Shared/Title/Title";
import img1 from "../../../assets/icons/react-2.svg";
import img2 from "../../../assets/icons/node-js-svgrepo-com.svg";
import img3 from "../../../assets/icons/express-svgrepo-com.svg";
import img4 from "../../../assets/icons/mongo-svgrepo-com.svg";
import img5 from "../../../assets/icons/logo-javascript.svg";
import img6 from "../../../assets/icons/material-ui-svgrepo-com.svg";
import img7 from "../../../assets/icons/tailwind-svgrepo-com.svg";
import img8 from "../../../assets/icons/daisy-svgrepo-com.svg";
import img9 from "../../../assets/icons/jwt-3.svg";
import img10 from "../../../assets/icons/firebase-1.svg";
import img11 from "../../../assets/icons/html-1.svg";
import img12 from "../../../assets/icons/css-3.svg";
import img13 from "../../../assets/icons/c.svg";
import img14 from "../../../assets/icons/c-1.svg";
import img15 from "../../../assets/icons/git-icon.svg";
import img16 from "../../../assets/icons/github-icon-1.svg";
import AnimationProvider from "../../../Provider/AnimationProvider/AnimationProvider";

const Skills = () => {
  return (
    <div id="skills" className="bg-brown-50">
      <div className="max-w-5xl mx-auto py-12 px-5 lg:px-0">
        <Title text="Skills" />
        <AnimationProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">React</p>
              <img src={img1} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Node js</p>
              <img src={img2} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Express js</p>
              <img src={img3} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">MongoDB</p>
              <img src={img4} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">JavaScript</p>
              <img src={img5} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Material UI</p>
              <img src={img6} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Tailwind css</p>
              <img src={img7} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Daisy UI</p>
              <img src={img8} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">JWT</p>
              <img src={img9} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Firebase</p>
              <img src={img10} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Html5</p>
              <img src={img11} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Css3</p>
              <img src={img12} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">C </p>
              <img src={img14} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">C++</p>
              <img src={img13} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Git</p>
              <img src={img15} className="w-10" alt="" />
            </div>
            <div className="flex items-center gap-2 justify-between max-w-[250px] py-3 px-5 rounded-xl  shadow-md hover:shadow-none bg-white">
              <p className="uppercase text-xl font-semibold">Github</p>
              <img src={img16} className="w-10" alt="" />
            </div>
          </div>
        </AnimationProvider>
      </div>
    </div>
  );
};

export default Skills;
