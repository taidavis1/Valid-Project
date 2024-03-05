import React, { useContext } from "react";
import { TechContext } from "./BookingMain";

export default function BookingTech() {
    const TechnicianName = [
        {
            index: 1,
            name : "Amber",
            img : require("../../img/anime-tech/1.png"),
            checkmark :  require("../../img/checkmark.png"),
        },
        {
            index: 2,
            name : "Nancy",
            img : require("../../img/anime-tech/2.png"),
            checkmark :  require("../../img/checkmark.png"),

        },
        {
            index: 3,
            name : "Linh",
            img : require("../../img/anime-tech/3.png"),
            checkmark :  require("../../img/checkmark.png"),

        },
        {
            index: 4,
            name : "Tifany",
            img : require("../../img/anime-tech/4.png"),
            checkmark :  require("../../img/checkmark.png"),

        },
        {
            index: 5,
            name : "Thu",
            img : require("../../img/anime-tech/5.png"),
            checkmark :  require("../../img/checkmark.png"),

        },
        {
            index: 6,
            name : "Nina",
            img : require("../../img/anime-tech/6.png"),
            checkmark :  require("../../img/checkmark.png"),

        },
        {
            index: 7,
            name : "None",
            img : require("../../img/anime-tech/8.png"),
            checkmark :  require("../../img/checkmark.png"),

        }
    ];

    const { tech, pageid, techclick, days } = useContext(TechContext);
    const [TechName, setTechName] = tech;
    const [PageId, SetPageId] = pageid;
    const [IsTechClick, setIsTechClick] = techclick;
    const [day, Setday] = days;

    const handleBtn = (id) => {
        setIsTechClick((lastClick) => ({
            [id]: !lastClick[id],
        }));
        if (!IsTechClick[id]) {
            setTechName(TechnicianName[id-1].name);
        }
        else {
            setTechName("");
        }
    };
    return (
        <>
            {SetPageId(3)}
            <div className="lg:py-3 text-center">
                <h1 className="text-3xl lg:text-4xl capitalize italic font-semibold tracking-wider" style={{ fontFamily: 'Tangerine' }}>Choose Your Prefer Technician:</h1>
            </div>
            <hr className="h-1 bg-gradient-to-r border-[#9eccfa]"></hr>
            <div className=" max-w-screen-xl">
                <div className="grid max-w-xl lg:px-12 grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 text-lg">
                    {TechnicianName.map((tech) => {
                        switch (tech.name) {
                            case "Tiffany":
                                return (
                                    day !== 'Sat' && (
                                        <div onClick={() => handleBtn(tech.index)} key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                            <div className="overflow-hidden">
                                                {!IsTechClick[tech.index]? 
                                                    <img src={tech.img} alt="#" className="w-full" /> : <img src={tech.checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-sky-500 font-bold tracking-wider">
                                                <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                            </div>
                                        </div>
                                    )
                                )
                            case "Nina":
                                return (
                                    (day === "Sat" || day === "Sun" || day === "Fri")?(
                                        <div onClick={() => handleBtn(tech.index)} key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                            <div className="overflow-hidden">
                                                {!IsTechClick[tech.index]? 
                                                    <img src={tech.img} alt="#" className="w-full" /> : <img src={tech.checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-sky-500 font-bold tracking-wider">
                                                <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                            </div>
                                        </div>
                                    ):null
                                )
                            case "None":
                                return (
                                    (day !== "Mon")&&(
                                        <div onClick={() => handleBtn(tech.index)} key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                            <div className="overflow-hidden">
                                                {!IsTechClick[tech.index]? 
                                                    <img src={tech.img} alt="#" className="w-full" /> : <img src={tech.checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-sky-500 font-bold tracking-wider">
                                                <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                            </div>
                                        </div>
                                    )
                                )
                            default:
                                return (
                                    day !== "Mon" && (
                                        <div onClick={() => handleBtn(tech.index)} key={tech.index} className="shadow-lg cursor-pointer py-3 space-y-3 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                            <div className="overflow-hidden">
                                                {!IsTechClick[tech.index]? 
                                                    <img src={tech.img} alt="#" className="w-full" />: <img src={tech.checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-pink-500 font-bold tracking-wider">
                                                <span style={{ fontFamily: 'Roboto' }}>{tech.name}</span>
                                            </div>
                                        </div>
                                    )
                                )
                        }
                    })}
                </div>
            </div>
        </>
    );
};