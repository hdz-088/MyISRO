import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="h-14 w-[90vw] backdrop-blur-lg flex flex-row items-center justify-evenly mt-10 fixed p-2 rounded-full z-20 font-Michroma text-xs md:text-base">
        <Link
          href={"#"}
          className="underline underline-offset-4 decoration-1 decoration-dashed hover:decoration-solid hover:text-[#f47216]"
        >
          About
        </Link>
        <Image
          src={"/logo.svg"}
          width={90}
          height={80}
          className="drop-shadow-xl hover:drop-shadow-xl"
          alt="Logo"
        />
        <Link
          href={"#"}
          className="underline underline-offset-4 decoration-1 decoration-dashed hover:decoration-solid hover:text-[#f47216]"
        >
          Activities
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
