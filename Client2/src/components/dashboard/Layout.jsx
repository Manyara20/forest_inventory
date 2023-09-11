import Navbar from "./Navbar";
import Footer from "../home/Footer";
import Menu from "./Menu";

const DashboardLayout = (Component) => {
  const WrappedComponent = ({...props}) => {
    return (
      <div className="font-sans bg-main-bg text-main-color">
        <Navbar />
        <div className="flex">
          <div className="w-[250px] border-r-[2px] border-r-solid border-r-soft-bg lg:w-auto pt-[5px] pr-[20px]">
            <Menu />
          </div>
          <div className="pt-[5px] pr-[20px] w-full">
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
