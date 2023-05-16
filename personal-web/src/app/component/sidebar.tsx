import React from "react";
import Image from "next/image";
import { personalData } from "../data/page-data";
import { profile } from "./icons/index";
import { Linkedin, Twitter } from "./icons/index";

const SideBar = () => {
    const {name,profession,education,contacts} =  personalData; //destructuring
    return (
        <div className="bg-black flex flex-col h-screen content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
            <div className="text-white flex flex-col p-10 items-center">
                <Image priority width={300} height={300}
                className="rounded-full h-full mb-6"
                 src={profile} alt="profile image"/>
                <h1 className="mb-2">{name}</h1>
                <h2 className="mb-8">{profession}</h2>
                <p className="mb-2">{education}</p>
                <div className="text-white text-center mb-4 mt-4 sm:mt-8">
                    <h3 className="mb-2">CONTACT ME</h3>
                    <div className="flex flex-row justify-center gap-3">
                    <a className="iconscontact-me" href={contacts[0]}><Twitter className={"twitter"}/></a>
                    <a className="iconscontact-me" href={contacts[1]}><Linkedin className={"linkedin"}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar;