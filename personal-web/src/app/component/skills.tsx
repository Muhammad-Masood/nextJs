"use client"
import { useState } from "react";
import { skills } from "../data/page-data";

export default function Skills() {
    const [activeTab, setActiveTab] = useState("soft");
    const {softSkills,hardSkills} = skills
    const setTabAlignment = (tab:any) => (tab==="soft"?"text-left":"text-right")
    console.log(activeTab);

    const skillSection = (
        <div className="flex">
        <button type="button" className={`btn ${activeTab==="soft"?"bg-yellow":"bg-grey"} ${setTabAlignment("soft")}`} onClick={() => setActiveTab("soft")}>
         Soft Skills
         </button>
        <button type="button" className={`btn ${activeTab ==="hard"?"bg-yellow":"bg-grey"} ${setTabAlignment("hard")}`} onClick={() => setActiveTab("hard")}>
         Hard Skills
         </button>
     </div>
    );

    const content = (
        <ul className={`flex flex-row flex-wrap 
        content-start list-none py-4 gap-2 ${activeTab == "soft" ? "justify-start" : "justify end"}`} >
            {activeTab === "soft" ? (
        softSkills.map(({ icon, text }) => (
            <li key={text} className="skill">
            <span>{icon}</span> {text}
            </li>
        ))
        ) : (
        hardSkills.map(({ icon, text }) => (
            <li key={text} className="skill">
            <span>{icon}</span> {text}
            </li>
        ))
        )}
        </ul>
    );
    return(
        <div>
            {skillSection}
            {content}
        </div>
    )
}