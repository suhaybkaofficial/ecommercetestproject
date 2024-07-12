import { CiMenuBurger, CiSearch } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { Input } from "../ui/input";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MountainIcon } from "lucide-react";

export default function MobileNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <CiMenuBurger size={20} className="text-primary" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 text-primary">
                <MountainIcon className="h-6 w-6" />
                <span className="font-semibold text-lg">Suhaybka Store</span>
              </Link>
            </SheetTitle>
            <SheetDescription>
              <nav className=" flex flex-col items-center justify-between  h-[30vh] p-5">
                <div className=" items-center gap-6 flex flex-col">
                  <div className="flex  items-center gap-2 text-primary ">
                    <SlLocationPin />
                    <h1>New York NY</h1>
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center gap-2 px-2 rounded-full">
                  <CiSearch className="text-primary ml-2" size={20} />
                  <Input
                    className="outline-none border-0 focus:outline-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0"
                    placeholder="Search...."
                  />
                </div>
                <div className="flex flex-col items-center gap-5 ">
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
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
