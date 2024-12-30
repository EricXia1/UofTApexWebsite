'use client'
import { useEffect } from "react";
import { typinganimation } from "./anim";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    const runAnimation = async () => {
      await typinganimation();
    };
    runAnimation();
  }, []);

  return <>{children}</>;
}