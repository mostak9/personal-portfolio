import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Shared/Navigation/Navigation";
import SideBar from "../../Components/Shared/SideBar/SideBar";
import { Toaster } from "sonner";


const MainLayout = () => {
    return (
        <div>
            <Toaster
            toastOptions={{
                // unstyled: true,
                classNames: {
                  error: 'bg-red-400',
                  success: 'text-green-400',
                  warning: 'text-yellow-400',
                  info: 'bg-blue-400',
                },
              }}
             position="bottom-left" />
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