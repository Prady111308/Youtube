import React, { useEffect, useState } from "react";
import { APP_LOGO, SIDE_MENU_ICON, USER_ICON ,YOUTUBE_SEARCH_RESULT_API,YOUTUBE_SEARCH_SUGGESTION_API} from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
// import { Link } from "react-router-dom";
import { setVideos } from "../utils/videoSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [showSuggestion, setSearchResults] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      //call youtube search api
      fetchSearchSuggestions();
    }, 1000);
    

    return () => {
      clearTimeout(timer);
    };
  
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const res = await fetch(
      YOUTUBE_SEARCH_SUGGESTION_API +
        searchQuery
    );
    const data = await res.json();
    setSearchSuggestions(data[1]);
  };

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = async() =>{
    //  console.log("searching for : "+searchQuery);
     const res = await fetch(YOUTUBE_SEARCH_RESULT_API+searchQuery);
     const data = await res.json();
    //  console.log(data.items);
     dispatch(setVideos(data.items));
     setSearchSuggestions([]);
  }

  return (
    <div className="grid grid-flow-col py-2 px-3">
      <div className="flex col-span-1">
        <img
          className="h-9 mr-5 p-2 hover:bg-gray-200 rounded-full cursor-pointer"
          alt="app Logo"
          src={SIDE_MENU_ICON}
          onClick={() => handleMenuToggle()}
        />
        <img className="h-9 p-2" alt="app Logo" src={APP_LOGO} />
      </div>
      <div className="col-span-10 flex justify-center">
        <div className="w-3/5 relative">
          <input
            className="border border-gray-400 w-full rounded-l-full py-2 px-5 focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.length > 0 && (
            <span
              className="absolute right-2 m-1 cursor-pointer text-red-500 text-2xl hover:font-bold"
              onClick={() => {
                setSearchQuery("");
              }}
            >
              ☓
            </span>
          )}
          {searchSuggestions && searchSuggestions.length > 0 && (
            <ul className="border border-gray-200 w-full rounded-md absolute z-10 bg-white shadow-lg py-2">
              {searchSuggestions.map((suggestion) => (
                <li
                  className=" hover:bg-gray-200 px-4 py-1 flex justify-between cursor-default "
                  key={suggestion}
                  onClick={()=>{setSearchQuery(suggestion); handleSearch()}}
                >
                  <div>
                    <span className="px-1 my-3">⎋ </span>
                    <span className="font-[500]">{suggestion}</span>
                  </div>
                  <div className="cursor-pointer text-[13px] text-blue-500 hover:underline font-sans">
                    Remove
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button
            className="py-2 px-4 border border-gray-400 rounded-r-full bg-gray-200 "
            type="button"
            onClick={()=>{handleSearch()}}
          >
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-1 text-right">
        <img className="h-9 mx-5 p-2" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
