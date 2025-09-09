import Subnav from '../subNav';
import React, { useState,useRef } from "react";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'datatables.net-select-dt/css/select.dataTables.min.css';

DataTable.use(DT);
function Layout() {
    const tableRef = useRef(null);
    const columns = [
        { data: 'id', title: 'ID', visible: false }, // Hidden ID
        { data: 'name', title: 'Name' },
        { data: 'position', title: 'Position' },
        { data: 'office', title: 'Office' },
        { data: 'extn', title: 'Extn.' },
        { data: 'start_date', title: 'Start date' },
        { data: 'salary', title: 'Salary' },
    ];

    const btnstyle={
        background:'red',
        color:'white',
        width:'150px',
        height:'150px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor: 'pointer'
    }

    const actionwrapper={
        display:'flex',
        justifyContent:'center',
        gap: '40px'
    }

    const findPosition = (role) =>{
        const table = tableRef.current?.dt();
        if (!table) {
            console.error('DataTable not initialized yet');
            return;
        }
        const positionColumnIndex = 2;
        table
        .column(positionColumnIndex)
        .search(role) // e.g., "Developer"
        .draw();
    }

    const clearFilter = () => {
        const table = tableRef.current?.dt();
        if (!table) return;

        table
            .search('') // Clear global search
            .columns().search('') // Clear all column filters
            .draw();
    };

    return (
        <>  
            <Subnav/>
            <h2>Data Table</h2>
            <div style={actionwrapper}>
                <div style={btnstyle} onClick={() => findPosition('Developer')}>Position</div>
                <div style={btnstyle} onClick={clearFilter}>Show All</div>
            </div>
            

             <DataTable
                ref={tableRef}
                ajax="dist/data.json"
                columns={columns}
                className="display"
                options={{
                    responsive: true,
                    select: true,
                }}
            >
            </DataTable>
        </>
    )
}






export default Layout;