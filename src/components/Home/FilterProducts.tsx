import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CiFilter } from "react-icons/ci";

export default function FilterProducts() {
  return (
    <div className="flex items-center justify-between">
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-5 rounded-full h-10 ">
                <Button variant="outline"  className="bg-gray-100 rounded-full px-3 gap-3">
                  Filter by <IoIosArrowDown />
                </Button>
           
          </div>
        </PopoverTrigger>
        <PopoverContent>Pirce</PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-5 rounded-full h-10 ">
                <Button variant="outline" className="bg-gray-100 rounded-full px-3 gap-3">
                  Category <CiFilter size={20}  />
                </Button>
           
          </div>
        </PopoverTrigger>
        <PopoverContent>filtering categories</PopoverContent>
      </Popover>
    </div>
  );
}
