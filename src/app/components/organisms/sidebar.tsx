"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import {
  AiOutlineSetting,
  AiOutlineLayout,
  AiFillLayout,
  AiFillSetting,
  AiFillCode,
  AiOutlineCode,
} from "react-icons/ai";

import { usePathname } from "next/navigation";

const SideBar = () => {
  const setActiveIcon = (
    outlineIcon: ReactNode,
    fillIcon: ReactNode,
    targetPathname: string,
  ) => {
    const pathname = usePathname();

    return pathname === targetPathname ? fillIcon : outlineIcon;
  };

  return (
    <div className="align-center flex h-screen w-1/6 flex-col bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      <div className="mx-auto mt-5">
        <Link href="/" className=" mt-3 text-5xl ">
          DevFlow
        </Link>
        <ul className="mx-auto flex-col text-2xl">
          <Link href="/" className="mt-5 flex items-center">
            {setActiveIcon(
              <AiOutlineLayout className="mr-4" />,
              <AiFillLayout className="mr-4" />,
              "/",
            )}
            Dashboard
          </Link>
          <Link href="/settings" className="mt-5 flex items-center">
            {setActiveIcon(
              <AiOutlineSetting className="mr-4" />,
              <AiFillSetting className="mr-4" />,
              "/settings",
            )}
            Settings
          </Link>
          <Link href="/integrations" className=" mt-5 flex items-center">
            {setActiveIcon(
              <AiOutlineCode className="mr-4" />,
              <AiFillCode className="mr-4" />,
              "/integrations",
            )}
            Integrations
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
