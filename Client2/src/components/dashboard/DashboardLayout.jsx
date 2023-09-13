import Navbar from "./Navbar";
import Footer from "../home/Footer";
import Menu from "./Menu";

const DashboardLayout = (Component) => {
  const WrappedComponent = ({...props}) => {
    return (
      <div className="font-sans text-black bg-gradient-to-br from-custom-blue to-custom-blue via-middle-green">
        <Navbar />
        <div className="flex">
          <div className="w-[300px] border-r-[2px] border-r-solid border-r-soft-bg lg:w-auto pt-[5px] mr-[20px] pr-[40px]">
            <Menu />
          </div>
          <div className="pt-[5px] pl-[20px] w-full">
            <Component {...props} />
          </div>
        </div>
        <Footer />
      </div>
    );
  };


  WrappedComponent.displayName = `Layout(${Component.displayName || Component.name})`;

  return WrappedComponent;
};

export default DashboardLayout;
