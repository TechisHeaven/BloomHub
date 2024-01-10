"use client";
import { storyData } from "@/constructors/story";
import { StoryData } from "@/types/type.storyData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import "./storySelector.css";
import { GrNext } from "react-icons/gr";

export default function StorySelector() {
  const journalRef = React.useRef(null);
  return (
    <div className="p-2 max-w-[1200px] m-auto">
      <Draggable rootClass={"drag"}>
        <div
          className="wrapper overflow-x-auto no-scrollbar flex items-center gap-4 justify-start px-4 p-2 relative"
          ref={journalRef}
        >
          <div className="Initialstory text-center w-full min-w-20 max-w-20 aspect-square flex items-center flex-col text-sm relative gap-2">
            <div className="bg-mainColor p-1 rounded-full absolute right-0 bottom-4">
              <IoIosAdd />
            </div>
            <div className="ring-2 ring-offset-2 max-w-16 ring-mainBlackColor aspect-square rounded-2xl overflow-hidden object-center">
              <Image
                src={"/user2.jpg"}
                width={100}
                height={100}
                alt="story user image"
              />
            </div>
            <h1 className=" font-semibold  max-w-[100px] text-ellipsis overflow-hidden  w-full">
              Your Story
            </h1>
          </div>
          {storyData.map((data: StoryData) => {
            return (
              <Link
                key={data.id}
                className="story text-center w-full min-w-20 max-w-20 aspect-square flex items-center flex-col text-sm gap-2"
                href={data.username}
              >
                <div className="  aspect-square rounded-2xl  max-w-16 overflow-hidden object-center">
                  <Image
                    src={"/user.jpg"}
                    width={100}
                    height={100}
                    alt="story user image"
                  />
                </div>
                <h1 className=" font-semibold truncate max-w-20 text-ellipsis overflow-hidden  w-full">
                  {data.name}
                </h1>
              </Link>
            );
          })}
        </div>
      </Draggable>
    </div>
  );
}

interface DraggableInterface {
  rootClass: string;
  children: React.ReactNode;
}
const Draggable = ({ rootClass = "", children }: DraggableInterface) => {
  const ourRef = React.useRef(null);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const mouseCoords = React.useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [isScrolling, setIsScrolling] = React.useState(false);
  const handleDragStart = (e) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = "default";
  };
  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={rootClass + "flex overflow-x-scroll no-scrollbar"}
    >
      {children}
    </div>
  );
};
