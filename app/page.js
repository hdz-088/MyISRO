import Image from "next/image";
import Link from "next/link";
import Numbers from "@/components/numbers";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      {/* <div className="h-[8vh] w-[90vw] backdrop-blur-lg flex flex-row items-center justify-evenly mt-10 fixed p-2 rounded-full z-20 font-Michroma text-xs md:text-base">
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
      </div> */}
      <div className="bg-[#12141e] bg-[url('/homebg.jpg')] bg-cover h-[100vh] w-[100vw] bg-center bg-no-repeat shadow-custom-inset flex items-center justify-center mt-8 flex-col">
        <p className="font-Zen_Dots text-[6rem] sm:text-[10rem] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] relative z-10 ">
          ISRO
        </p>
        <Image
          src={"/astronaut.png"}
          width={300}
          height={200}
          alt="astronaut"
          className="absolute animate-hoverInSpace top-36"
        />
        <p className="text-right font-Michroma">From India to Infinity!</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex p-2 items-center justify-center ">
          <Image
            src={"/logo.svg"}
            width={70}
            height={60}
            className="drop-shadow-xl hover:drop-shadow-xl"
            alt="Logo"
          />
          <p className="p-4 font-Michroma text-xl">in Numbers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 items-center justify-center mb-10 cursor-pointer">
          <div className="mt-10 bg-[url('/spacecraft.jpg')] bg-cover bg-center bg-no-repeat h-56 w-56 rounded-full flex flex-col items-center justify-center hover:bg-[#f47216] hover:bg-none group relative transition-all duration-500 ease-in-out">
            <p className="font-Zen_Dots text-[5rem] hidden group-hover:block absolute transition-opacity duration-500 ease-in-out">
              129
            </p>
            <p className="text-xl font-Zen_Dots text-center text-shadow-cover group-hover:hidden transition-opacity duration-500 ease-in-out">
              Spacecraft Missions
            </p>
          </div>
          {/*  */}
          <div className="mt-10 bg-[url('/reentry.jpg')] bg-cover bg-center bg-no-repeat h-56 w-56 rounded-full flex flex-col items-center justify-center hover:bg-[#f47216] hover:bg-none group relative transition-all duration-500 ease-in-out">
            <p className="font-Zen_Dots text-[5rem] hidden group-hover:block absolute transition-opacity duration-500 ease-in-out">
              09
            </p>
            <p className="text-xl font-Zen_Dots text-center text-shadow-cover group-hover:hidden transition-opacity duration-500 ease-in-out">
              Re-Entry Missions
            </p>
          </div>
          {/*  */}
          <div className="mt-10 bg-[url('/satellite.jpg')] bg-cover bg-center bg-no-repeat h-56 w-56 rounded-full flex flex-col items-center justify-center hover:bg-[#f47216] hover:bg-none group relative transition-all duration-500 ease-in-out">
            <p className="font-Zen_Dots text-[4.5rem] hidden group-hover:block absolute transition-opacity duration-500 ease-in-out">
              449
            </p>
            <p className="text-xl font-Zen_Dots text-center text-shadow-cover group-hover:hidden transition-opacity duration-500 ease-in-out">
              Satellites Launched
            </p>
          </div>
          {/*  */}
          <div className="mt-10 bg-[url('/spacecraft.jpg')] bg-cover bg-center bg-no-repeat h-56 w-56 rounded-full flex flex-col items-center justify-center hover:bg-[#f47216] hover:bg-none group relative transition-all duration-500 ease-in-out">
            <p className="font-Zen_Dots text-[5rem] hidden group-hover:block absolute transition-opacity duration-500 ease-in-out">
              99
            </p>
            <p className="text-xl font-Zen_Dots text-center text-shadow-cover group-hover:hidden transition-opacity duration-500 ease-in-out">
              Launch Missions
            </p>
          </div>
          {/*  */}
          <div className="mt-10 bg-[url('/gaganyan.jpg')] bg-cover bg-center bg-no-repeat h-56 w-56 rounded-full flex flex-col items-center justify-center hover:bg-[#f47216] hover:bg-none group relative transition-all duration-500 ease-in-out">
            <p className="font-Zen_Dots text-[5rem] hidden group-hover:block absolute transition-opacity duration-500 ease-in-out">
              01
            </p>
            <p className="text-xl font-Zen_Dots text-center text-shadow-cover group-hover:hidden transition-opacity duration-500 ease-in-out">
              Gaganyan Mission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
