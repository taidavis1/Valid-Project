import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { ServiceContext } from "./BookingMain";
export default function BookingServices() {
    const { service, click, pageid, clicksub } = useContext(ServiceContext);
    const [IsClick, setIsClick] = click;
    const [ServiceVal, setServiceVal] = service;
    const [IsSubClick, setIsSubClick] = clicksub;
    const [PageId, SetPageId] = pageid;
    const Services = [
        {
            name: "Manicure",
            service: ["Regular Manicure", "Acrylic Nails", "Gel Manicure"]
        },
        {
            name: "Pedicure",
            service: ["Express Spa Pedicure", "Deluxe Spa Pedicure", "Regular Gel Pedicure"]
        },
        {
            name: "Wax",
            service: ["EyeBrow Wax" , "Leg Wax" , "Arm Wax" , "Bikini Wax"]
        },
        {
            name: "Kid Services",
            service: ["Pedicure Kid", "Manicure Kid", "Gel Pedicure Kid", "Gel Manicure Kid"]
        }

    ];
    const handleBtn = (id) => {

        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));

        // if (IsClick[id]) {
        //     setServiceVal([""]);
        //     setIsSubClick({});
        // }
    };

    const handleSub = (id, index) => {

        setIsSubClick((lastClick) => ({
            ...lastClick,
            [id]: {
                ...lastClick[id],
                [index]: !lastClick[id]?.[index],
            },
        }));

        if (!IsSubClick[id]?.[index]) {
            setServiceVal([...ServiceVal, Services[id].service[index]]);
        }
        
        else {
            setServiceVal(ServiceVal.filter((service) => service !== Services[id].service[index]));
        }
    };

    return (
        <>
            {SetPageId(1)}
            <div className="lg:py-3 text-center">
                <h1 className="text-3xl lg:text-4xl capitalize italic font-semibold tracking-wider" style={{ fontFamily: 'Tangerine' }}>What Services Do You Want?</h1>
            </div>
            <hr className="h-0.5 border-[#9eccfa]"></hr>
            <div className="grid lg:grid-cols-1 lg:p-4 gap-6 justify-items-center">
                {Services.map((ser, id) => (
                    <>
                        <div className="w-full cursor-pointer hover:scale-105 ease-in-out transition-all duration-1000 py-3 shadow-lg font-semibold tracking-wide font-Poppins text-center border-[#9eccfa] border-2" key={id} onClick={() => handleBtn(id)}>
                            <div className="grid grid-cols-3">
                                <span className="col-span-2 tracking-wider text-sm lg:text-lg">{ser.name}</span>
                                <div className="flex flex-col justify-center">
                                    {!IsClick[id] ?
                                        <FontAwesomeIcon className="text-sm lg:text-lg text-sky-600" icon={faPlus} /> : <FontAwesomeIcon className="text-sm lg:text-lg text-sky-600" icon={faXmark} />
                                    }
                                </div>
                            </div>
                        </div>
                        {IsClick[id] && (
                            <div className="grid grid-cols-1 gap-4">
                                {ser.service.map((s, index) => (
                                    <div onClick={() => handleSub(id, index)} key={index} className="lg:px-8 lg:py-3 px-4 py-2 cursor-pointer shadow-lg font-semibold tracking-wide text-center border-gray-400 border-2">
                                        <div className="grid grid-cols-3">
                                            <span className="col-span-2 text-gray-500 tracking-wider text-sm lg:text-lg">{s}</span>
                                            <div>
                                                {!IsSubClick[id]?.[index] ? (
                                                    <FontAwesomeIcon className="text-sm lg:text-lg " icon={faCircle} />
                                                ) : (
                                                    <FontAwesomeIcon className="text-green-400 w-5 h-5" icon={faCheckCircle} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ))}
            </div>
        </>
    );
}