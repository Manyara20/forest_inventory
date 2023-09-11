import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const [active, setActive]=useState(false)

  const classJustify = active ? 'justify-center': 'justify-between'

  const navigate = useNavigate();

  const handleNavigate = (item)=>{
    navigate(item)
  }
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className="z-30 cursor-auto fixed top-0 left-0 h-15 w-full ">
      <div className={`hidden md:flex flex-row items-center py-3 ${classJustify}`}>
        {
          !active ? (
          <div onClick={()=>{handleNavigate('/')}} className=" items-center justify-start cursor-pointer">
            <h3 className=" text-start text-purple-50 font-mono font-extrabold text-2xl px-4">KFS Inventory</h3>
          </div>
          ): ""
        }
        <div className=" border-solid rounded-full border-indigo-200 border-2 bg-gradient-to-b from-custom-blue to-middle-green">
        <ul className="flex space-x-2">
          <li>
            <button className="hover:bg-lime-600 text-purple-50 font-extra-bold font-extrabold py-2 px-4 rounded">
              Home
            </button>
          </li>
          <li>
            <button className="hover:bg-lime-600 text-purple-50  font-extra-bold font-extrabold py-2 px-4 rounded">
              About
            </button>
          </li>
          <li>
            <button className="hover:bg-lime-600 text-purple-50  font-extra-bold font-extrabold py-2 px-4 rounded">
              Services
            </button>
          </li>
          <li>
            <button className="hover:bg-lime-600 text-purple-50  font-extra-bold font-extrabold py-2 px-4 rounded">
              Contact
            </button>
          </li>
        </ul>
        </div>
        {
          !active ? (
            <div className=" flex items-center justify-end flex-row gap-2">
            <button onClick={()=>{handleNavigate('/login')}} className="font-sans font-extrabold px-4 py-2 text-purple-800  "> Log In </button>
            <button onClick={()=>{handleNavigate('/register')}} className=" font-sans text-purple-800 font-extrabold font rounded-full bg-white px-4 py-2 hover:bg-custom-green"> Sign Up </button>
        </div>
          ): ""
        }
        
      </div>
    </div>
  )
}

export default Navbar