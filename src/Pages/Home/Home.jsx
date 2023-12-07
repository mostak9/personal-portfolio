import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import Projects from "../../Components/Home/Projects/Projects";


const Home = () => {
    return (
        <div className="lg:max-w-[calc(100vw-22rem) lg:w-[calc(100vw-21rem)] lg:ml-auto" >
           <Banner/> 
           <About/>
           <Projects/>
        </div>
    );
};

export default Home;