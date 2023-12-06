import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Shared/Navigation/Navigation";
import SideBar from "../../Components/Shared/SideBar/SideBar";


const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <div className="hidden md:flex items-center gap-3 ">
            <SideBar/>
            <Outlet/>
            </div>
            <div className="md:hidden">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;