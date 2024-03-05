import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import NavAdmin from "./NavAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import NavAdmin from './components/Admin/NavAdmin';
import axios from "axios";


export default function AdminCheckin(props){

    const [data , setData] = useState([]);

    const socket = io("https://tanyaapi.tmstart.cloud/delete" , {autoConnect: false});


    const handleDeletion = (resp) => {
        alert(resp.msg);
        setData(data.filter(item => item.phone !== resp.phone));
    }

    const DeleteBtn = (phone) => {
        socket.connect();
        const isConfirmed = window.confirm('Delete Check In?');
        if (isConfirmed) {
            socket.emit("delete_checkin" , {phone:phone});
            socket.on("delete_msg" , handleDeletion);
        }
    };

    const GenerateCheckin = () => {
        axios.get(`${process.env.REACT_APP_ADM_URL_LOCAL}/admin/adminCheckIn`, {
            withCredentials: true,
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        })
        .then((resp) => {
            const res = resp.data;
            res.access_token && props.setToken(res.access_token);
            setData(res.data);
        })
        .catch((error) => {
            console.log(error);
            window.location.href = '/Admin/Login';
        });
    }

    useEffect(() => {

        GenerateCheckin();

        const socket = io("https://tanyaapi.tmstart.cloud" , {autoConnect: false});

        const handleChecking = (resp) => {
            setData(prevData => [...prevData , resp]);
        }

        socket.connect();
        
        socket.on("check_data" , handleChecking);

        return () => {
            socket.off("check_data" , handleChecking);
            socket.disconnect();
        };

    }, []); 

    return (

        <div className="">
            <NavAdmin token={props.token} removeToken={props.removeToken} setToken={props.setToken} />
            <div className="flex flex-col pt-24 px-5 py-4 ">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mb-4">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left">
                                        <thead className="border-b-2 border-b-black font-medium">
                                            <tr className="text-md uppercase">
                                                <th scope="col" className="px-6 py-4">id</th>
                                                <th scope="col" className="px-6 py-4">name</th>
                                                <th scope="col" className="px-6 py-4">phone</th>
                                                <th scope="col" className="px-6 py-4">date</th>
                                                <th scope="col" className="px-6 py-4">time</th>
                                                <th scope="col" className="px-6 py-4">services</th>
                                                <th scope="col" className="px-6 py-4">technician</th>
                                                <th scope="col" className="px-6 py-4">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((d, index) => (
                                                <tr className="border-b-2 border-b-black text-lg" key={index}>
                                                    {/* Updated class to className and other styling issues */}
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.phone}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.date}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.time}</td>
                                                    <td className=" px-6 py-4">{d.services}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.technician}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                                                        <button onClick={() => DeleteBtn(d.phone)} className="border-2 group rounded-full shadow-lg hover:bg-[#9eccfa] border-[#9eccfa] px-4 py-2">
                                                            <FontAwesomeIcon className="text-[#9eccfa] group-hover:text-white" icon={faTrash} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    );
};