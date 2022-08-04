import { DataGrid } from "@material-ui/data-grid";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import "./guestList.css";

export default function GuestList() {
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
                    <AiFillEdit className="guestListEdit" />
                    <AiFillDelete className="guestListDelete" />
                </>
            )
        }
      },
  ];

  const rows = [
    {
      id: 1,
      name: "Albert flores",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
    {
      id: 2,
      name: "Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
    {
      id: 3,
      name: "Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
    {
      id: 4,
      name: "Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
    {
      id: 5,
      name: "Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
    {
      id: 6,
      name: "Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
    {
      id: 7,
      name: "Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
    {
      id: 8,
      name: "Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      contact: "snow@gmail.com, +123456789",
      status: "come in",
      address: "Lagos, Nigeria",
    },
  ];

  return (
    <div className="guestList">
      <div className="guestListDataTable" style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
      
    </div>
  );
}
