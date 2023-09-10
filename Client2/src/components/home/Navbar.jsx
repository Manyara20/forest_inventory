import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  const handleNavigate = (item)=>{
    navigate(item)
  }

  return (
    <div className="z-50 cursor-auto">
      <div className="hidden md:flex flex-row justify-between items-center py-3 ">
        <div onClick={()=>{handleNavigate('/')}} className=" items-center justify-start cursor-pointer">
           <h3 className=" text-start text-purple-50 font-mono font-extrabold text-2xl px-4">KFS Inventory</h3>
        </div>
        <div className=" border-solid rounded-full border-indigo-200 border-2">
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
        <div className=" flex items-center justify-end flex-row gap-2">
            <button className="font-sans font-extrabold px-4 py-2 text-purple-800  "> Log In </button>
            <button onClick={()=>{handleNavigate('/register')}} className=" font-sans text-purple-800 font-extrabold font rounded-full bg-white px-4 py-2 hover:bg-custom-green"> Sign Up </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar