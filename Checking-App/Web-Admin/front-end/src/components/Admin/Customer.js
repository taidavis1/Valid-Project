import React, { useState , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faPhone , faAngleLeft , faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";
import NavAdmin from './NavAdmin';

export default function AdminCustomer(props) {

    const [data, setData] = useState([]);

    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 8;

    const generateData = async () => {
        try{
            const res = await fetch(
                `${process.env.REACT_APP_ADM_URL_LOCAL}/admin/posts/customer/1/${limit}`,
                {
                    method: 'GET',
                    headers:{
                        'Authorization': `Bearer ${props.token}`
                    },
                    credentials: 'include',
                }
            );
            if (!res.ok){
                alert(props.token);
            }
            else{
                const data = await res.json();
                const totalrec = data.total
                const total = totalrec;
                console.log(total);
                setpageCount(Math.ceil(total / limit));
                setItems(data.posts);
            }
        } catch (error){
            window.location.href = '/Admin/Login';
        }
    };

    useEffect(() => {
        generateData();
    }, [limit]);


    const fetchPost = async (currentPage) => {
        let status = document.getElementById('status');
        status.classList.remove('hidden');
        const res = await fetch(
            `${process.env.REACT_APP_ADM_URL_LOCAL}/admin/posts/customer/${currentPage}/${limit}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${props.token}`
                },
                credentials: 'include',
            }
        );
        const data = await res.json();
        status.classList.add('hidden');
        return data.posts;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;

        const listpage = await fetchPost(currentPage);

        setItems(listpage);
    };


    const DeleteBtn = (id) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this item?');
        if (isConfirmed) {
            axios.delete(`${process.env.REACT_APP_ADM_URL_LOCAL}/admin/delete/${id}/customer`, { // Updated method to delete
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
                            <table className="table-auto w-[500px] sm:w-full text-left">
                                <thead className="border-b-2 text-center border-b-black font-medium">
                                    <tr className="text-md uppercase">
                                        <th scope="col" className="px-6 py-4">id</th>
                                        <th scope="col" className="px-6 py-4">name</th>
                                        <th scope="col" className="px-6 py-4">phone</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {items.map((row, index) => <tr className="border-b-2 border-gray-200 h-10" key={index} style={{fontFamily: 'Roboto Flex'}}>
                                        <td className="text-center" >{row.id}</td>
                                        <td className="text-center" >{row.name}</td>
                                        <td className="text-center space-x-1" >
                                            <FontAwesomeIcon icon={faPhone} />
                                            <span>{row.phone}</span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                                            <button onClick={() => DeleteBtn(row.id)} className="border-2 group rounded-full shadow-lg hover:bg-[#9eccfa] border-[#9eccfa] px-4 py-2">
                                                <FontAwesomeIcon className="text-[#9eccfa] group-hover:text-white" icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>

                            <ReactPaginate
                                previousLabel={<FontAwesomeIcon icon={faAngleLeft}/>}
                                nextLabel={<FontAwesomeIcon icon={faAngleRight}/>}
                                breakLabel={<span className="mr-4 text-black">...</span>}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName="pagination flex items-center justify-center mt-8 mb-4"
                                pageClassName="block border-1 border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md"
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item text-center p-2 border-2 group shadow-lg hover:bg-[#9eccfa] border-[#9eccfa] w-12 rounded-lg"}
                                previousLinkClassName={"page-link group-hover:text-white text-[#9eccfa]"}
                                nextClassName={"page-item text-center p-2 border-2 shadow-lg group hover:bg-[#9eccfa] border-[#9eccfa] w-12 rounded-lg"}
                                nextLinkClassName={"page-link group-hover:text-white text-[#9eccfa]"}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link"}
                                activeClassName="text-sky-600 font-bold"
                                disabledClassName="text-gray-300 font-bold"
                            />     
                        </div>
                    </div>
                </div>

                <div className="text-center flex justify-center hidden" role="status" id="status">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    );
}
