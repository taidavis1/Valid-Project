import { React, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faCalendar, faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import axios from "axios";

function NavAdmin(props) {
    const showList = () => {
        let classAttr = document.getElementById('dropDownList').className;
        console.log(classAttr);
        if (classAttr.includes('hidden')) {
            document.getElementById('dropDownList').classList.remove('hidden');
        } else {
            document.getElementById('dropDownList').classList.add('hidden');
        }
    };
    const logout = () => {
        axios.post(`${process.env.REACT_APP_ADM_URL_LOCAL}/admin/logout`, {}, {
            withCredentials: true,
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        })
        .then((resp) => {
            props.removeToken();
            alert(resp.data.msg);
            window.location.href = '/Admin/Login';
        })
        .catch((error) => {
            console.error(error); // Changed to console.error for logging errors
        });
    }
    useEffect(() => {
        console.log('reload');
        console.log(props.token);
        if (!props.token) {
            document.getElementById('guest').classList.remove('hidden');
            document.getElementById('auth').classList.remove('block');
            document.getElementById('auth').classList.add('hidden');
        } else {
            document.getElementById('auth').classList.remove('hidden');
            document.getElementById('guest').classList.remove('block');
            document.getElementById('guest').classList.add('hidden');
        }
    }, []); 
    return (
        <div className="w-full font-sans">
            <nav className="bg-white flex justify-between p-5 lg:justify-around  shadow-md w-full fixed top-0 left-0 right-0 z-10 ">
                <div id="logo flex">
                    {/* <img className="w-14 md:w-24 rounded-full" src={book1} /> */}
                    <span className=" flex text-4xl text-[#9eccfa] font-Dancing italic">TanYa Spa</span>
                </div>
                <div className="flex text-md items-center space-x-8 font-new-font text-lg uppercase hidden sm:flex">
                    <a className="flex items-center gap-2 text-black t-underline t-underline-black border-b-yellow-500 transition ease-in-out delay-150 duration-200 font-mono" href="/Admin/Booking">
                        <FontAwesomeIcon icon={faList} />
                        Booking
                    </a>
                    <a className="flex items-center gap-2 text-black t-underline t-underline-black border-b-yellow-500 transition ease-in-out delay-150 duration-200 font-mono" href="/Admin/Checkin">
                        <FontAwesomeIcon icon={faCheckDouble} />
                        Check-In
                    </a>
                    <a className="flex items-center gap-2 text-black t-underline t-underline-black border-b-yellow-500 transition ease-in-out delay-150 duration-200 font-mono" href="/Admin/Customer">
                        <FontAwesomeIcon icon={faCheckDouble} />
                        Customer
                    </a>
                </div>
                <div className="flex flex-col justify-center px-4 items-center gap-2">
                    <div className="flex flex-row justify-end w-full">
                        <div className="hidden" id="auth">
                            <button onClick={showList} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:bg-slate-700" type="button">
                                <span className="font-mono">Admin</span>
                                <FontAwesomeIcon className="ml-2" icon={faUser} />
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div className="relative">
                                <div id="dropDownList" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute mr-6">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li className="block sm:hidden">
                                            <a href="/Admin/Booking" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Booking</a>
                                        </li>
                                        <li className="block sm:hidden">
                                            <a href="/Admin/Checkin" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Check-In</a>
                                        </li>
                                        <li className="block sm:hidden">
                                            <a href="/Admin/Customer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Customer</a>
                                        </li>
                                        <li className="cursor-pointer" onClick={logout}>
                                            <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="block" id="guest">
                            <div id="notSignIn" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                                <a href="/Admin/Login" className="font-mono">Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavAdmin;