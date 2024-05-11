import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const sideMenu = [
    {
      id: "1",
      title: "",
      list: [
        { link: "Home", to: "/" },
        { link: "shorts", to: "" },
      ],
    },
    {
      id: "2",
      title: "susbscription",
      list: [
        { link: "song Lover", to: "" },
        { link: "Pramod's Blog", to: "" },
      ],
    },
    {
      id: "3",
      title: "explore",
      list: [
        { link: "Trending", to: "" },
        { link: "Shopping", to: "" },
        { link: "Music", to: "" },
        { link: "Movies", to: "" },
        { link: "Live", to: "" },
        { link: "Gaming", to: "" },
        { link: "News", to: "" },
      ],
    },
  ];

  // console.log(sideMenu);

  return isMenuOpen ? (
    <div className="w-2/12 h-screen overflow-scroll">
      {sideMenu.map((MenuCategory) => {
        return (
          <div
            key={MenuCategory.id}
            className="border-b border-gray-200 my-4 pb-4 px-4"
          >
            {MenuCategory.title && (
              <h1 className="font-semibold capitalize text-gray-950/90">
                {MenuCategory.title}
              </h1>
            )}
            <ul>
              {MenuCategory.list.map((menuItem) => {
                return <Link to={menuItem.to} key={Math.random()*101}>
                  <li
                    
                    className="py-2 rounded-md px-2 hover:bg-gray-200 cursor-pointer transition duration-150 capitalize font-light text-sm"
                  >
                    {menuItem.link}
                  </li>
                </Link>
      })}
            </ul>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default Sidebar;
