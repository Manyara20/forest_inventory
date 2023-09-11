
const Navbar = () => {

  return (
    <div className=" w-full p-[20px] flex items-center justify-between">
      <div className=" flex items-center font-bold justify-between">
        <img src="logo.svg" alt="" />
        <span className="text-white font-extrabold">KFS Admin</span>
      </div>
      <div className=" flex items-center gap-[20px]">
        <img src="/search.svg" alt="" className="items-center font-bold hidden sm:flex " />
        <img src="/app.svg" alt="" className=" flex items-center font-bold" />
        <img src="/expand.svg" alt="" className=" flex items-center font-bold" />
        <div className=" relative">
          <img src="/notifications.svg" alt="" />
          <span className=" bg-red-400 text-white w-[16px] h-[16px] rounded-[50%] absolute top-[10px] right-[-10px] flex items-center justify-center text-[12px]">1</span>
        </div>
        <div className=" flex items-center gap-[10px]">
          <img className=" w-[26px] h-[-26] rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span className=" font-extrabold text-white">Jane</span>
        </div>
        <img src="/settings.svg" alt="" className=" w-[26px] h-[-26] rounded-[50%] object-cover" />
      </div>
    </div>
  );
};

export default Navbar;