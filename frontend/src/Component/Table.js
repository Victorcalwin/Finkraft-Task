import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css'; 
import axios from 'axios';
import './table.css'


function Table() {
    const tableRef = useRef(null);
    const [userdata, setUserdata] = useState([]);
  
    useEffect(() => {
      const table = $(tableRef.current);
  
      const fetchUserdata = async () => {
        try {
          const response = await axios.get('http://localhost:5000/users');
          setUserdata(response.data.users);
  
          // Check if the table has already been initialized
          if (!table.hasClass('dataTable')) {
            // Initialize the DataTable with the data
            table.DataTable({
              data: response.data.users,
              columns: [
                { title: 'Name', data: 'name' },
                { title: 'Position', data: 'position' },
                { title: 'Office', data: 'office' },
                { title: 'Age', data: 'age' },
                { title: 'Start Date', data: 'start' },
                { title: 'Salary', data: 'salary' },
              ],
              paging: true,
              dom: 'lfrtip',
              lengthMenu: [10, 25, 50, 100],
              searching: true,
              ordering: true,
              language: {
                paginate: {
                  previous: '<i class="fas fa-chevron-left"></i>',
                  next: '<i class="fas fa-chevron-right"></i>',
                },
                info: 'Showing _START_ to _END_ of _TOTAL_ entries',
              },
            });
          } else {
            // If the table has already been initialized, update its data
            table.DataTable().clear().rows.add(response.data.users).draw();
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUserdata();
    }, []);
    

    console.log(userdata);

    return (
        <>

            <table ref={tableRef} className="table table-striped" style={{ width: "100%", marginTop: "20%" }}>
                <thead>
                    <tr className='header'>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.office}</td>
                            <td>{user.age}</td>
                            <td>{user.start}</td>
                            <td>{user.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table