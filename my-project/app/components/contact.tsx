import React from "react";
import Image from "next/image";

const Contact = () => {

    return (
        <>
            <div className="bg-indigo-900">
                <div className="contact text-white">
                    <p className="text-center pt-20 font-display coperate-para">CONTACT</p>
                </div>
                <div>
                    <div>
                        <Image src="/sources/call.png" height="75" width="75" className="call-now " />
                        <p className="text-white call-text">Call</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Contact;
