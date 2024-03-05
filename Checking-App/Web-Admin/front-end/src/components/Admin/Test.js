import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faAngleLeft, faAngleRight, faArrowLeftLong, faCakeCandles, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function CheckPoint(props) {
    const [data, setData] = useState([]);
    
    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 10;

    const getPost = async () => {
        try {
            const res = await fetch(
                `http://127.0.0.1:8080/api/posts/1/${limit}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${props.token}`
                    },
                    credentials: 'include',
                }
            );
            if (!res.ok){
                window.location.href = '/Admin/Login';
            }
            else{
                const data = await res.json();
                //console.log(data.posts);
                const totalrec = data.total
                const total = totalrec;
                console.log(total);
                setpageCount(Math.ceil(total / limit));
                // console.log(Math.ceil(total/12));
                setItems(data.posts);
            }
        } catch (error) {
            window.location.href = '/Admin/Login';
        }

    };

    useEffect(() => {
        getPost();
    }, [limit]);

    const fetchPost = async (currentPage) => {
        let status = document.getElementById('status');
        status.classList.remove('hidden');
        const res = await fetch(
            `http://127.0.0.1:8080/api/posts/${currentPage}/${limit}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${props.token}`
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

    return (
        <div className="flex flex-col px-5 py-8 space-y-6 bg-gray-100 min-h-screen">
            <div className="text-start justify-start ml-6">
                <span className="text-yellow-500 text-6xl" style={{fontFamily : 'Tangerine'}}>This is checking point page</span>
            </div>
            <div className="p-4 bg-white rounded-lg overflow-auto" id="table-client">
                <table className="table-auto w-[500px] sm:w-full" style={{marginTop: '50px'}}>
                    <thead>
                        <tr className="border-b-2 bg-gray-100 h-12" style={{fontFamily : 'Roboto'}}>
                            <th className="border-b-1 border-gray-200">ID</th>
                            <th className="border-b-1 border-gray-200">Client</th>
                            <th className="border-b-1 border-gray-200">Phone</th>
                            <th className="border-b-1 border-gray-200">Date of Birth</th>
                            <th className="border-b-1 border-gray-200">Points</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {items.map((row, index) => <tr className="border-b-2 border-gray-200 h-10" key={index} style={{fontFamily: 'Roboto Flex'}}>
                            <td className="text-center" >{row.id}</td>
                            <td className="text-center" >{row.title}</td>
                            <td className="text-center space-x-1" >
                                <FontAwesomeIcon icon={faPhone} />
                                <span>{row.phone}</span>
                            </td>
                            <td className="text-center space-x-1" >
                                <FontAwesomeIcon icon={faCakeCandles} />
                                <span>{row.dob}</span>
                            </td>
                            <td className="text-center" >{row.point}</td>
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
                    previousClassName={"page-item text-center border-2 p-2 bg-gray-200 hover:bg-gray-300 w-12 rounded-lg"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item text-center border-2 p-2 bg-gray-200 hover:bg-gray-300 w-12 rounded-lg"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName="text-black font-bold"
                    disabledClassName="text-gray-300 font-bold"
                />     
            </div>
            <div className="text-center flex justify-center hidden" role="status" id="status">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            
        </div>
    );
}