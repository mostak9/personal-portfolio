import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Shared/Navigation/Navigation";
import SideBar from "../../Components/Shared/SideBar/SideBar";


const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <div className="hidden lg:flex items-center">
            <SideBar/>
            <Outlet/>
            </div>
            <div className="lg:hidden">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;