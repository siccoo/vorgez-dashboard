import "./sidebar.css";

import { BsFillGridFill  } from "react-icons/bs";
import { MdPanoramaPhotosphereSelect } from "react-icons/md";
import { RiBarChartBoxFill } from "react-icons/ri";
import { IoGiftSharp } from "react-icons/io5";
 


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h5 className="sidebar__title">Main Menu</h5>
          <ul className="sidebar__list">
            <li className="sidebar__listItem active">
              <BsFillGridFill /> Dashboard
            </li>
            <li className="sidebar__listItem">
              <MdPanoramaPhotosphereSelect /> Catering Status
            </li>
            <li className="sidebar__listItem">
              <RiBarChartBoxFill /> Guest traffic
            </li>
            <li className="sidebar__listItem">
              <IoGiftSharp /> Gifts
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h5 className="sidebar__title">Main Menu</h5>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <BsFillGridFill /> Dashboard
            </li>
            <li className="sidebar__listItem">
              <MdPanoramaPhotosphereSelect /> Catering Status
            </li>
            <li className="sidebar__listItem">
              <RiBarChartBoxFill /> Guest traffic
            </li>
            <li className="sidebar__listItem">
              <IoGiftSharp /> Gifts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
