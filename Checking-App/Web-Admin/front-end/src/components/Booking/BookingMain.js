import React, { createContext, useState } from "react";
import { Outlet, Link, Navigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";

export const ServiceContext = createContext("");
export const DateContext = createContext("");
export const InfoContext = createContext("");
export const TechContext = createContext("");

export default function BookingMain() {
    const [ServiceVal, SetServiceVal] = useState([]);
    const [DateVal, SetDateVal] = useState('');
    const [IsSubClick, setIsSubClick] = useState({});
    const [orginalVal, setoriginalVal] = useState('');
    const [IsClick, setIsClick] = useState(false);
    const [day, Setday] = useState('');
    const [isSelect, SetisSelect] = useState(false);
    const [PageId, SetPageId] = useState(1);
    const [isTime, SetTime] = useState('');
    const [BGColor, setBGColor] = useState({});
    const [Phone, setPhone] = useState('');
    const [Name, setName] = useState('');
    const [TechName, setTechName] = useState('');
    const [IsTechClick, setIsTechClick] = useState(false);

    const sendInfo = (e) => {
        e.preventDefault();
        if (Name !== '' &&  Phone != '' && ServiceVal.length > 0 && DateVal !== '' && TechName !== '' && isTime !== ''){
            axios.post(`${process.env.REACT_APP_API_URL_LOCAL}/book`, {
                name: Name,
                phone: Phone,
                service: ServiceVal,
                date: DateVal,
                time: isTime,
                technician: TechName,
            }).then(function (resp) {
                alert(resp.data.messages);
                window.location.href = "/";
            })
                .catch(function (error) {
                    console.log(error, 'error');
                });
        }
        else{
            alert("Please Enter All The Information")
        }
    };

    return (
        <ServiceContext.Provider value={{ service: [ServiceVal, SetServiceVal], click: [IsClick, setIsClick], pageid: [PageId, SetPageId], clicksub: [IsSubClick, setIsSubClick] }}>
            <DateContext.Provider value={{ pageid: [PageId, SetPageId], date: [DateVal, SetDateVal], original: [orginalVal, setoriginalVal], days: [day, Setday], select: [isSelect, SetisSelect], time: [isTime, SetTime], color: [BGColor, setBGColor] }}>
                <TechContext.Provider value={{ days: [day, Setday], tech: [TechName, setTechName], pageid: [PageId, SetPageId], techclick: [IsTechClick, setIsTechClick] }}>
                    <InfoContext.Provider value={{ pageid: [PageId, SetPageId], phone: [Phone, setPhone], name: [Name, setName]}}>
                        <section className="space-y-6 mb-6 lg:space-y-12">
                            <div className=" bg-pageb1 lg:bg-pageb bg-no-repeat bg-center bg-cover pt-60 lg:pb-40 relative"></div>
                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 px-6">
                                    <div className="lg:px-12 lg:col-span-6 space-y-6">
                                        <Outlet />
                                        {PageId === 1 && (
                                            <div className="flex justify-center" style={{ fontFamily: 'Tangerine' }}>
                                                <Link 
                                                    onClick={() => {
                                                        if (ServiceVal.length > 0){
                                                            alert("You Choose " + ServiceVal);
                                                        }
                                                    }}
                                                    to =  "/Booking/datetime"
                                                    className="bg-[#9eccfa] md:hidden shadow-md ease-in-out transition duration-100 hover:scale-105 text-3xl cursor-pointer p-16 md:px-16 py-2 text-[#0a1856] font-bold tracking-wider">Continue
                                                </Link>
                                                <Link 
                                                    to = "/Booking/datetime"
                                                    className="bg-[#9eccfa] md:flex hidden shadow-md ease-in-out transition duration-100 hover:scale-105 text-3xl cursor-pointer p-16 md:px-16 py-2 text-[#0a1856] font-bold tracking-wider">Continue
                                                </Link>
                                            </div>
                                        )}
                                        {PageId === 2 && (
                                            <div className="flex justify-center space-x-5 lg:space-x-12 py-4">
                                                <Link to="/Booking/services" className="bg-[#9eccfa] rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    <FontAwesomeIcon className="" icon={faArrowLeft} />
                                                </Link>
                                                <Link onClick={() => {
                                                    if (DateVal !== '' && isTime !== ''){
                                                        alert("You Choose " + DateVal + ' ' + isTime);
                                                    };
                                                }} to="/Booking/bookingtechnician" className="bg-[#9eccfa] md:hidden rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    <FontAwesomeIcon className="" icon={faArrowRight} />
                                                </Link>
                                                <Link to="/Booking/bookingtechnician" className="bg-[#9eccfa] hidden md:flex rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    <FontAwesomeIcon className="" icon={faArrowRight} />
                                                </Link>
                                            </div>
                                        )}
                                        {PageId === 3 && (
                                            <div className="flex justify-center space-x-5 lg:space-x-12 py-4">
                                                <Link to="/Booking/datetime" className="bg-[#9eccfa] rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    <FontAwesomeIcon className="" icon={faArrowLeft} />
                                                </Link>
                                                <Link onClick={() => {
                                                    if (TechName !== ''){
                                                        alert("You choose " + TechName);
                                                    }
                                                }} to="/Booking/info" className="bg-[#9eccfa] md:hidden rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    <FontAwesomeIcon className="" icon={faArrowRight} />
                                                </Link>
                                                <Link
                                                    to="/Booking/info" className="bg-[#9eccfa] hidden md:flex rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    <FontAwesomeIcon className="" icon={faArrowRight} />
                                                </Link>
                                            </div>
                                        )}
                                        {PageId === 4 && (
                                            <div className="flex justify-center space-x-5 lg:space-x-12 py-4">

                                                <Link to="/Booking/bookingtechnician" className="bg-[#9eccfa] rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-lg md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    <FontAwesomeIcon className="" icon={faArrowLeft} />
                                                </Link>

                                                <button onClick={(e) => sendInfo(e)} type="submit"  className="bg-[#9eccfa] rounded-lg shadow-md ease-in-out transition duration-100 hover:scale-105 text-lg md:text-2xl cursor-pointer px-16 py-2 border-[#9eccfa] border-2 font-serif tracking-wider">
                                                    Submit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="hidden lg:block p-6 col-span-2 space-y-6 border-2 border-[#9eccfa] rounded-lg">
                                        <div className="flex justify-center">
                                            <span className="font-serif text-2xl" style={{ fontFamily: 'Tangerine' }}>Appointment Details</span>
                                        </div>
                                        <div>
                                            <nav className="flex flex-col space-y-6" style={{ fontFamily: 'Roboto' }}>
                                                <div className="px-2">
                                                    <div className="flex space-x-4">
                                                        <div className="border-2 w-7 h-7 rounded-full text-center">
                                                            <span className="">1</span>
                                                        </div>
                                                        <div className="mt-0.5">
                                                            <div style={{ fontFamily: 'Roboto' }}><span>Services:</span></div>
                                                            <ul className="font-bold space-y-2 list-inside">
                                                                {ServiceVal.map((s, index) => (
                                                                    <li key={index}>{s}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2">
                                                    <div className="flex space-x-4">
                                                        <div className="border-2  w-7 h-7 rounded-full  text-center">
                                                            <span className="">2</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div className="mt-0.5" >Date:</div>
                                                            <span className="font-bold">{DateVal}</span>
                                                            <span className="font-bold">{isTime}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2">
                                                    <div className="flex space-x-4">
                                                        <div className="border-2  w-7 h-7 rounded-full  text-center">
                                                            <span className="">3</span>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <div className="mt-0.5">Nail Technician:</div>
                                                            <span className="font-bold">{TechName}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2">
                                                    <div className="flex space-x-4">
                                                        <div className="border-2 w-7 h-7 rounded-full text-center">
                                                            <span className="">4</span>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <div className="mt-0.5">Info:</div>
                                                            <span className="font-bold">{Name}</span>
                                                            <span className="font-bold">{Phone}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </InfoContext.Provider>
                </TechContext.Provider>
            </DateContext.Provider>
        </ServiceContext.Provider>
    );
};