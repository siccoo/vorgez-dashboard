import { DataGrid } from "@material-ui/data-grid";

import "./guestList.css";

export default function GuestList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
        //   editable: true,
        },
        {
          field: 'contact',
          headerName: 'Contact',
          width: 160,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 160,
          editable: true,
        },
        {
          field: 'address',
          headerName: 'Address',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
      ];
      
      const rows = [
        {   id: 1, 
            name: 'Snow', 
            avatar: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            contact: 'snow@gmail.com, +123456789',
            status: 'come in',
            address: 'Lagos, Nigeria'
        },
        {   id: 2, 
            name: 'Snow', 
            avatar: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            contact: 'snow@gmail.com, +123456789',
            status: 'come in',
            address: 'Lagos, Nigeria'
        },
        {   id: 3, 
            name: 'Snow', 
            avatar: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            contact: 'snow@gmail.com, +123456789',
            status: 'come in',
            address: 'Lagos, Nigeria'
        },
        {   id: 4, 
            name: 'Snow', 
            avatar: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            contact: 'snow@gmail.com, +123456789',
            status: 'come in',
            address: 'Lagos, Nigeria'
        },
        {   id: 5, 
            name: 'Snow', 
            avatar: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            contact: 'snow@gmail.com, +123456789',
            status: 'come in',
            address: 'Lagos, Nigeria'
        },
        {   id: 6, 
            name: 'Snow', 
            avatar: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            contact: 'snow@gmail.com, +123456789',
            status: 'come in',
            address: 'Lagos, Nigeria'
        },
        {   id: 7 , 
            name: 'Snow', 
            avatar: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            contact: 'snow@gmail.com, +123456789',
            status: 'come in',
            address: 'Lagos, Nigeria'
        },
        
      ];

  return (
    <div className="guestList" style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
