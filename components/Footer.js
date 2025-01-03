import Image from "next/image";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-white text-black px-4 py-8 rounded-t-[30px] flex flex-col md:flex-row">
      <div className="flex flex-col gap-4">
        <Image src={"/logo.svg"} width={80} height={80} alt="logo" />
        <p className="font-Michroma font-bold">
          Indian Space Research Organisation
        </p>
        <p className="text-sm font-medium">
          <strong>ISRO</strong> is the space agency of India. The organisation
          is involved in science engineering and technology to harvest the
          benefits of outer space for India and the mankind. ISRO is a major
          constituent of the <strong>Department of Space (DOS)</strong>,
          Government of India. The department executes the Indian Space
          Programme primarily through various Centres or units within ISRO.
        </p>
      </div>
      {/* SOCIALS */}
      <div className="flex flex-col w-[100%]">
        <p>Follow ISRO</p>
        <div className="flex gap-2">
          <MdFacebook />
          <AiFillInstagram />
          <BsTwitterX />
          <AiFillYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
