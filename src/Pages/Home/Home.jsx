import Banner from "../../Components/Home/Banner/Banner";

const Home = () => {
    return (
        <div className="md:max-w-[calc(100vw-25rem)] md:ml-auto">
           <Banner/>
           <Banner/>
        </div>
    );
};

export default Home;