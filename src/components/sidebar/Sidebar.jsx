import "./sidebar.css";

import { BsFillGridFill  } from "react-icons/bs";
import { MdPanoramaPhotosphereSelect, MdOutlineLiveHelp } from "react-icons/md";
import { RiBarChartBoxFill, RiAccountBoxLine } from "react-icons/ri";
import { IoGiftSharp } from "react-icons/io5";
import { TbWallet } from "react-icons/tb";

// BiLogOut

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h5 className="sidebar__title">Main Menu</h5>
          <ul className="sidebar__list">
            <li className="sidebar__listItem active">
              <BsFillGridFill className="sidebar__icon" /> Dashboard
            </li>
            <li className="sidebar__listItem">
              <MdPanoramaPhotosphereSelect className="sidebar__icon" /> Catering Status
            </li>
            <li className="sidebar__listItem">
              <RiBarChartBoxFill className="sidebar__icon" /> Guest traffic
            </li>
            <li className="sidebar__listItem">
              <IoGiftSharp className="sidebar__icon" /> Gifts
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h5 className="sidebar__title">Settings</h5>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <RiAccountBoxLine className="sidebar__icon" /> Account
            </li>
            <li className="sidebar__listItem">
              <TbWallet className="sidebar__icon" /> Wallet
            </li>
            <li className="sidebar__listItem">
              <MdOutlineLiveHelp className="sidebar__icon" /> Help & Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
