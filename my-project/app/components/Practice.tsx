import React from "react";
import Image from "next/image";

const Practice = () => {
  return (
    <>
      <div className="">
        <p className="text-center pt-20 font-display coperate-para">PRACTICE AREA</p>
        <div className="flex justify-center">
          <div>
            <Image src="/sources/coperatelaw.jpg" width="1500" height="700" alt="order" className=" pb-10 pl-10 pt-10" />
          </div>
          <div className="font-display text-center border-black dark:bg-slate-800 hover:bg-sky-700 min-h-64 w-full pt-8 pr-10">
            {/* <p className="sizeoffont">Gain the insights, advice and tools to achieve</p>
            <p className="sizeoffont">your mission-critical priorities</p> */}
            <p className="text-orange-400 coperate-text pt-20 ">COPERATE lAW</p>

            <p className="text-orange-300 coperate-para pt-5 pl-16 pr-16 ">As companies seek growth beyond their home markets, they must manage regulatory risks, bridge cultural differences and compete effectively.</p>
          </div>
        </div>
      </div>


    </>
  );
};

export default Practice;
