import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { IoIosArrowDown } from "react-icons/io";
import MobileNav from "./MobileNav";
import { MountainIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-between">
      <div className=" items-center gap-6 flex">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary">
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold text-lg">Suhaybka Store</span>
        </Link>
        <div className="hidden lg:flex items-center gap-2 text-primary ">
          <SlLocationPin />
          <h1>New York NY</h1>
        </div>
      </div>
      <div className="bg-gray-100 hidden lg:flex items-center gap-2 px-2 rounded-full">
        <CiSearch className="text-primary ml-2" size={20} />
        <Input
          className="outline-none border-0 focus:outline-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0"
          placeholder="Search...."
        />
      </div>
      <div className="hidden lg:flex items-center gap-5 ">
        <div className="flex items-center gap-3 font-semibold">
          <FaCartShopping />
          Cart
        </div>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-2 rounded-full h-10">
              <img
                src="https://i.ibb.co/4KgxSpt/d473f390ed78cc845580d8f4911cac3a-1-removebg-preview.pngg"
                alt="icon"
                className="object-cover h-10 w-10   rounded-full bg-gray-100 border-primary border"
              />
              <IoIosArrowDown />
            </div>
          </PopoverTrigger>
          <PopoverContent>Logout</PopoverContent>
        </Popover>
      </div>
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}
