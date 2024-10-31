import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios';
import {Link} from 'react-router-dom'

function Topnav() {
    const [query, setQuery] = useState("");
    const [searches, setsearches] = useState([]);
    const GetSerches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetSerches();
    }, [query]);
  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto  items-center">
    <i className="text-zinc-400 text-3xl ri-search-line"></i>
    <input
        onChange={e => setQuery(e.target.value)}        
        value={query}        
        className="w-[50%]  text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
    />
        {query.length > 0 && (
        <i
            onClick={e => setQuery("")}
            className=" text-zinc-400 text-3xl ri-close-fill right-0"
        ></i>
        )}

    <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">

            <Link
                to=''

                className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
                <img
                    className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg "
                    src=''
                    alt=""
                />
                <span>

                </span>
            </Link>
    </div>
</div>
  )
}

export default Topnav