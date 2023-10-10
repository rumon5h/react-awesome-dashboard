import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [open, setOpen] = useState(true);

  return (
    <div className="flex">
        <FontAwesomeIcon className="absolute top-5 right-5 font-extrabold text-gray-950 hover:text-[#68CEF0]" width={30} height={30} onClick={() => setOpen(!open)} icon={open ? faXmark : faBars} />

        <div className={`text-xl flex-col p-5 w-[250px] card-bg1 h-screen text-white z-10 absolute ${open ? 'visible': 'hidden'}`}>
            <Link onClick={() => setOpen(!open)} className="block mt-3 hover:text-[#68CEF0]"  to="/home">Home</Link>
            <Link onClick={() => setOpen(!open)} className="block mt-3 hover:text-[#68CEF0]"  to="/about">About Us</Link>
            <Link onClick={() => setOpen(!open)} className="block mt-3 hover:text-[#68CEF0]"  to="/contact">Contact Us</Link>
            <Link onClick={() => setOpen(!open)} className="block mt-3 hover:text-[#68CEF0]"  to="/blogs">Blogs</Link>
            <Link onClick={() => setOpen(!open)} className="block mt-3 hover:text-[#68CEF0]"  to="/history">History</Link>
            <Link onClick={() => setOpen(!open)} className="block mt-3 hover:text-[#68CEF0]" to="/deposited">Deposited</Link>
            <Link onClick={() => setOpen(!open)} className="block mt-3 hover:text-[#68CEF0]" to="/myhistory">My History</Link>
        </div>
        <div className="">
        <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard;