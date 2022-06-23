import React from "react";
import {
  AiFillAccountBook,
  AiFillAlipayCircle,
  AiFillAliwangwang,
  AiFillAmazonCircle,
} from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <div className="sidebar-icon">
        <AiFillAccountBook size={28} />
      </div>
      <div className="sidebar-icon">
        <AiFillAlipayCircle size={28} />
      </div>
      <div className="sidebar-icon">
        <AiFillAliwangwang size={28} />
      </div>
      <div className="sidebar-icon">
        <AiFillAmazonCircle size={28} />
      </div>
    </div>
  );
}
