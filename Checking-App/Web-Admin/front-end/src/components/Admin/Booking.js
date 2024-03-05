import React, { useState , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import NavAdmin from './NavAdmin';

export default function AdminBook(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        generateData();
    }, []); 

    const generateData = () => {
        axios.get(`${process.env.REACT_APP_ADM_URL_LOCAL}/admin/adminBook`, {
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
    };

    const DeleteBtn = (id) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this item?');
        if (isConfirmed) {
            axios.delete(`${process.env.REACT_APP_ADM_URL_LOCAL}/admin/delete/${id}/book`, { // Updated method to delete
                withCredentials: true,
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${props.token}`
                },
            })
            .then((resp) => {
                alert(resp.data.message);
                setData(data.filter(item => item.id !== id));
            })
            .catch(() => {
                window.location.href = '/Admin/Login';
            });
        }
    };

    return (
        <>
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
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{d.id}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.phone}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.date}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.time}</td>
                                                    <td className=" px-6 py-4">{d.services}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-bold">{d.technician}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                                                        <button onClick={() => DeleteBtn(d.id)} className="border-2 group rounded-full shadow-lg hover:bg-[#9eccfa] border-[#9eccfa] px-4 py-2">
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
                        <div className="flex justify-center">
                            <button onClick={(e) => { e.preventDefault(); window.location.href = '/Booking'; }} className="shadow-lg bg-[#9eccfa] rounded-full font-bold text-lg text-white w-[250px] py-3">Add Appointment</button>
                        </div>
            </div>
        </>
    );
}