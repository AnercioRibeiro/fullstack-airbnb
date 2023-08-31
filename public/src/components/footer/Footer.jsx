import React from "react";

export default function Footer() {
  const links = [
    "privacy",
    "terms",
    "sitemap",
    "company details",
    "destinations",
  ];

  return <div className="px-20 border-t-gray-200 py-4 
  flex justify-between w-full text-sm z-50 
  bg-white items-center">
  <ul className="flex gap-3 font-normal">
    <li>&copy;{new Date().getFullYear()} AirBnb, Inc
      {
        links.map((link)=>
        (<li key> <link>{link.charAt(0)
          .toUpperCase() + link.slice(1).toLowerCase()}
          </link></li>)
        )
      }
    </li>
  </ul>
  </div>;
}
