import { AnimatePresence } from "framer-motion";
import React from "react";

export default function FramerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
