import Image from "next/image";
import MorePopover from "./MorePopover";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { CiLocationArrow1, CiBookmark } from "react-icons/ci";
import Link from "next/link";
import ShareLinkDialog from "./ShareLinkDialog";

export default function Posts() {
  const Posts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <div className="mx-0 lg:mx-10 xl:mx-20">
      {Posts.map((post) => {
        return (
          <div
            key={post.id}
            className="bg-white my-8 border rounded-2xl overflow-hidden w-full flex p-6 gap-4"
          >
            <div className=" aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={"/user3.jpeg"}
                width={600}
                height={600}
                className="w-full"
                alt="story user image"
              />
            </div>
            <div className="content w-full max-w-[400px] flex flex-col my-4">
              <div className="flex gap-2 items-center justify-between">
                <div className="max-w-12 aspect-square overflow-hidden rounded-full">
                  <Image
                    src={"/user2.jpg"}
                    width={100}
                    height={100}
                    className="w-full"
                    alt="story user image"
                  />
                </div>
                <div className="heading flex-1">
                  <Link href={"/"} className="font-semibold hover:underline">
                    jekafe
                  </Link>
                  <p className="text-sm text-gray-600">Houston , Texas</p>
                </div>
                <MorePopover />
              </div>
              <div className="description my-2  flex-1">
                <p className="text-gray-700">
                  <span className="font-semibold text-black">jekafe</span> Hi
                  everyone today i relalized to upload this project to git with
                  their correct commit
                  <br />
                  <br />
                  Shot by @jekafe
                  <br />
                  <br />
                  #fofof #tututu #photographylove
                </p>
                <p className="text-xs text-gray-500 font-medium my-4">
                  1 day ago
                </p>
              </div>
              <hr />
              <div className="interaction my-2">
                <div className="topcomment">
                  <h1 className="text-xl font-semibold">Comments</h1>
                  <div>
                    <div className="flex items-center gap-2 w-full py-4">
                      <div className="max-w-12 aspect-square overflow-hidden rounded-full">
                        <Image
                          src={"/user3.jpeg"}
                          width={100}
                          height={100}
                          className="w-full"
                          alt="story user image"
                        />
                      </div>
                      <div className="flex  flex-col items-start flex-1">
                        <div className="flex gap-2 flex-row items-center">
                          <h1>jer_maguire</h1>
                          <p className="text-gray-500">Beautifull!!</p>
                        </div>
                        <div className="flex gap-2 flex-row items-center text-xs">
                          <p className="text-gray-500">2 h</p>
                          <p className="text-gray-500">1 Like</p>
                          <p className="text-gray-500">reply</p>
                        </div>
                      </div>
                      <div className="like text-sm  p-2 rounded-lg cursor-pointer">
                        <FaRegHeart />
                      </div>
                    </div>
                    <hr />
                    <div className="my-2">
                      <h1 className="text-sm text-gray-500">
                        Liked by{" "}
                        <span className="font-medium text-black">
                          ui.shubham
                        </span>{" "}
                        & <span className="font-medium text-black">540</span>{" "}
                        others
                      </h1>
                      <div className="flex flex-row items-center gap-2 p-2">
                        <div className="p-1 cursor-pointer">
                          <FaRegHeart />
                        </div>
                        <div className="p-1 cursor-pointer">
                          <FiMessageCircle />
                        </div>

                        <ShareLinkDialog link={"http://localhost:3000/post/2"}>
                          <div className="flex-1 p-1 cursor-pointer">
                            <CiLocationArrow1 />
                          </div>
                        </ShareLinkDialog>
                        <div className="p-1 cursor-pointer">
                          <CiBookmark />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
