"use client";
import Header from "@/components/ui/Header/Header";
import FramerWrapper from "./framer_wrapper";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <FramerWrapper>
          <div className="template max-w-[1280px] m-auto">
            <Header />
            {children}
            <Toaster />
          </div>
        </FramerWrapper>
      </ThemeProvider>
    </>
  );
}
