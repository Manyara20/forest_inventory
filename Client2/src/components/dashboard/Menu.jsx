import { Link } from "react-router-dom";
import { menu } from "../../constants/dashboardData";

const Menu = () => {
  return (
    <div className=" flex flex-col gap-[10px] mt-[20px]">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className=" text-[12px] font-extralight text-soft-color uppercase hidden lg:block">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className=" flex items-center gap-[10px] p-[10px] rounded-[5px]  hover:bg-soft-bg " key={listItem.id}>
              <img className=" text-black font-bold" src={listItem.icon} alt="" />
              <span className="hidden lg:block text-white font-sans pl-2">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;