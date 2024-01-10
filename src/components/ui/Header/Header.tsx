import Link from "next/link";
import { FiSearch, FiMessageCircle } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { CiLogout } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";

export default function Header() {
  return (
    <div className=" p-2 px-4 flex flex-row justify-between border-b-2  items-center">
      <Link href={"/"} className="text-2xl flex gap-2">
        <p>BloomHub</p>
      </Link>
      <div className="flex items-center gap-2">
        <div className="hover:bg-mainColor p-2 rounded-md transition-all">
          <Link href={"/"}>
            <GrHomeRounded />
          </Link>
        </div>
        <div className="hover:bg-mainColor p-2 rounded-md transition-all text-lg">
          <Link href={"/search"}>
            <FiSearch />
          </Link>
        </div>

        <div className="hover:bg-mainColor p-2 rounded-md transition-all text-lg relative ">
          <Link href={"/chat"}>
            <div>
              {/* <div className="text-xs  text-white bg-red-400 top-0 rounded-full right-0 absolute text-center w-5">
                9
              </div> */}
              <FiMessageCircle />
            </div>
          </Link>
        </div>
        <div className="hover:bg-mainColor p-2 rounded-md transition-all text-lg">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none flex items-center">
              <BiUserCircle />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">
                  <div className="flex items-center gap-2 text-mainBlackColor">
                    <LuUser2 />
                    Profile
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 items-center cursor-pointer text-mainBlackColor">
                <CiLogout />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Sheet>
          <SheetTrigger>
            <motion.div
              className="button text-xl border-b-4 border-r-4 border-mainBlackColor bg-mainColor hover:shadow-md shadow-sm transition-all flex items-center gap-2 p-2 rounded-lg relative"
              whileTap={{ transform: "translate(2px , 2px)" }}
            >
              <div className="text-xs  text-white bg-red-400 top-0 rounded-full right-0 absolute text-center w-5">
                9
              </div>
              <IoIosNotificationsOutline />
            </motion.div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <div className="flex flex-col">
                <Link
                  href={"/notification"}
                  className="p-2 px-4 hover:bg-gray-200 transition-colors rounded-md"
                >
                  notification 1
                </Link>
                <Link
                  href={"/notification"}
                  className="p-2 px-4 hover:bg-gray-200 transition-colors rounded-md"
                >
                  notification 2
                </Link>
                <Link
                  href={"/notification"}
                  className="p-2 px-4 hover:bg-gray-200 transition-colors rounded-md"
                >
                  notification 3
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <motion.button
          className="mx-2"
          whileTap={{ transform: "translate(2px , 2px)" }}
        >
          <Link
            href={"/"}
            className="button  border-b-4 border-r-4 border-mainBlackColor bg-mainColor hover:shadow-md shadow-sm transition-all flex items-center gap-2 p-2 px-4 rounded-md text-base"
          >
            <MdAdd />
            <p> Add Post</p>
          </Link>
        </motion.button>
      </div>
    </div>
  );
}
