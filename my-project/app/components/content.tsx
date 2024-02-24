import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import img from "./sources/order.gif";
import { Button } from "@material-tailwind/react";

const Content = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
        <div className="flex justify-left pt-60 pl-10 pb-6">
          <div className="text-white border-black dark:bg-slate-800 hover:bg-sky-700 min-h-64 w-full pt-8">
            <p className="text-5xl font-bold">
              <ReactTyped 
                strings={["Aiming To Provides"]}
                typeSpeed={120}
                backspaceSpeed={140}
                loop
              />
            </p>
            <p className="text-5xl pt-4 font-bold">
              <ReactTyped 
                strings={["Best Legal Services."]}
                typeSpeed={120}
                backspaceSpeed={140}
                loop
              />
            </p>
            <div className="pt-10 pb-10">
              <p className="pt-6 text-lg font-bold">
                We approach each problem with three essential elements:
              </p>
              <p className="pt-1 text-lg font-bold">
                <u>strategic</u>
                <u className="pl-1">thinking</u> <u>creative</u>{" "}
                <u>solutions</u> <u>proven</u> <u>results</u>
              </p>
            </div>
          </div>
          <div class="relative order-height ...">
            <div class="absolute inset-y-0 right-0 min-h-fit min-w-fit">
              <Image src="/sources/order.gif" width="500" height="300" alt="order" className=" pr-10"/>
            </div>
          </div>
        </div>
        <div className="flex pl-16 items-center pt-10">
          <Button variant="gradient" size="lg" className="btn-size text-center appsbtn">
            Book Appointment
          </Button>
        </div>
        
    </>
  );
};

export default Content;
