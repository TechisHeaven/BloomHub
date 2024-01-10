"use client";
import { IoIosMore } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import { Drawer, DrawerContent, DrawerTrigger } from "../../drawer";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { LuPin } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import { IoMdDownload, IoIosShareAlt } from "react-icons/io";
import { FaRegCommentAlt, FaRegUser } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../alert-dialog";

export default function MorePopover() {
  const [innerWidth, setInnerWidth] = React.useState(0);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
      window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    }
  }, []);

  return (
    <div className="more">
      {innerWidth >= 800 ? (
        <Popover>
          <PopoverTrigger>
            <div
              className={"p-2 hover:bg-mainColor rounded-lg transition-colors"}
            >
              <IoIosMore />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <button className="capitalize flex items-center  gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <IoIosShareAlt /> share
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <IoSaveOutline /> save
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <FaRegUser /> about profile
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <FaRegCommentAlt /> turn off commenting
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <IoMdDownload /> download
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <FiEdit2 /> edit
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <LuPin /> pin to your profile
              </button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 bg-red-500 text-white hover:bg-red-600 transition-colors rounded-md">
                    <MdDeleteOutline /> delete
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your post and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer>
          <DrawerTrigger>
            <div
              className={"p-2 hover:bg-mainColor rounded-lg transition-colors"}
            >
              <IoIosMore />
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-2 px-4 ">
              <button className="capitalize flex items-center  gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <IoIosShareAlt /> share
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <IoSaveOutline /> save
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <FaRegUser /> about profile
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <FaRegCommentAlt /> turn off commenting
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <IoMdDownload /> download
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <FiEdit2 /> edit
              </button>
              <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 hover:bg-gray-200 transition-colors rounded-md">
                <LuPin /> pin to your profile
              </button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="capitalize flex items-center gap-2 p-2 w-full text-start px-4 bg-red-500 text-white hover:bg-red-600 transition-colors rounded-md">
                    <MdDeleteOutline /> delete
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
