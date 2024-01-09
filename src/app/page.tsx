"use client";
import Posts from "@/components/ui/Home/Posts/Posts";
import StorySelector from "@/components/ui/Home/StorySelector/StorySelector";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("light");
  return (
    <div>
      <StorySelector />
      <Posts />
    </div>
  );
}
