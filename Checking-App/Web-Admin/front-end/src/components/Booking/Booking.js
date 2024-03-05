import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { InfoContext } from "./BookingMain";
import { Link } from 'react-router-dom';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import axios from "axios";

function Booking() {
    const { pageid, name, phone } = useContext(InfoContext);
    const [Phone, setPhone] = phone;
    const [Name, setName] = name;
    const [PageId, SetPageId] = pageid;

    // const userContact = (e) => {
    //     e.preventDefault();
    //     axios.post('api/booking', {
    //         name: Name,
    //         phone: Phone,
    //     })
    //         .then(function (res) {
    //             setName('');
    //             setPhone('');
    //             alert(res.data.messages);
    //         })
    //         .catch(function (error) {
    //             console.log(error, 'error');

    //         });
    // };


    return (
        <>
            {SetPageId(4)};
            
            <div className="p-2 mx-auto max-w-screen-xl">
                <h1 className="text-3xl lg:text-5xl text-justify capitalize font-semibold tracking-wider" style={{ fontFamily: 'Tangerine' }}>Confirm Your Information</h1>
            </div>
            <hr className="h-1 bg-gradient-to-r border-[#9eccfa]"></hr>
            <div className="flex mx-auto max-w-screen-xl cursor-pointer">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 lg:mb-2">
                        <div className="w-full md:w-1/2 px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input value={Name} onChange={(e) => setName(e.target.value)} className="appearance-none focus:outline-none border-sky-300 block w-full text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight" type="text" placeholder="Your Name" />
                            {Name === "" && 
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 lg:mb-2">
                        <div className="w-full px-3  space-y-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Phone
                            </label>
                            <input value={Phone} onChange={(e) => setPhone(e.target.value)} className="appearance-none block w-full  border-sky-400 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="(***) ***-****" />
                            {Phone === "" && 
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
} 

export default Booking;