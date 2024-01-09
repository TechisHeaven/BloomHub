"use client";
import Header from "@/components/ui/Header/Header";
import FramerWrapper from "./framer_wrapper";
import { ThemeProvider } from "@/components/theme-provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
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
        </div>
      </FramerWrapper>
    </ThemeProvider>
  );
}
