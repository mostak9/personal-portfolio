import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import Contact from "../../Components/Home/Contact/Contact";
import Projects from "../../Components/Home/Projects/Projects";
import Skills from "../../Components/Home/Skills/Skills";


const Home = () => {
    return (
        <div className="lg:max-w-[calc(100vw-22rem) lg:w-[calc(100vw-21rem)] lg:ml-auto" >
           <Banner/> 
           <About/>
           <Skills/>
           <Projects/>
           <Contact/>
        </div>
    );
};

export default Home;