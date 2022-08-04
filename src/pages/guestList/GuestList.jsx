import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { guestRows } from "../../dummyData";

import "./guestList.css";

export default function GuestList() {
  const [data, setData] = useState(guestRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="guestListUser">
            <img className="guestListImg" src={params.row.avatar} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return <div className="guestListStatus">
            <p className="status">{params.row.status}</p>
            </div>;
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/" + params.row.id}>
              <AiFillEdit className="guestListEdit" />
            </Link>

            <AiFillDelete
              className="guestListDelete"
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="guestList">
      <div
        className="guestListDataTable"
        style={{
          // height: 640,
          width: "100%",
        }}
      >
        <div className="guestListDataShow">
          <div className="one">
            <p>
              Show
              {/* <div className="custom-select"> */}
              <select className="custom-select">
                <option value="0">8</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {/* </div> */}
              Entries
            </p>
          </div>
          <div className="two">
            <form>
              <FiSearch className="guestSearchIcon" />
              <input type="search" placeholder="Search name, email or etc" />
            </form>
          </div>
        </div>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
