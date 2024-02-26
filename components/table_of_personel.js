import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS

import { Button, Box, Typography, Paper } from '@mui/material';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router'
import DownloadIcon from '@mui/icons-material/Download';

import useSWR from 'swr'
import Deletepersonel from './delete_personnel';
import Editepersonnel from './edite_personel';
import Ajouterpersonnel from './add_personnel';


const TablePersonel = () => {
  const row = useRouter();
  const { locale } = row;


 const gridRef = useRef(); // Optional - for accessing Grid's API


 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
   //{field: 'id', filter: true, floatingFilter: true,},
   {headerName: "Prenom",field: 'prenom', filter: true,  floatingFilter: true, width:120},
   {headerName: "Nom",field: 'nom', filter: true,  floatingFilter: true, width:120},
   {headerName: "Sex",field: 'sex', filter: true,floatingFilter: true,minWidth:50, wrapText: true,autoHeight: true},
   {headerName: "Adresse",field: 'adress', filter: true,floatingFilter: true,width:300 , wrapText: true,autoHeight: true},
   {headerName: "Date de Naissance",field: 'naissance', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},
   {headerName: "Date d'entre'",field: 'entre', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},
   {headerName: "Nombre d'enfants",field: 'enfant', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},
   {headerName: "Prenom de femme",field: 'prenom_femme', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},
   {headerName: "Prenom de père",field: 'prenom_pere', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},
   {headerName: "Nom de mére",field: 'nom_mere', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},
   {headerName: "Prenom de mére",field: 'prenom_mere', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},
   {headerName: "Numero de Telephone",field: 'tel', filter: true,floatingFilter: true, width:150 , wrapText: true, autoHeight: true},

   {headerName: "Operations", field:"id",width:100,
    cellRenderer:(params)=> 
   <div style={{display: "flex", alignItems:"center", justifyContent:"space-between"}}>
    <Editepersonnel p={params}/>
    <Deletepersonel p={params}/>
   </div>},
 ]);

 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
     resizable: true,
     sortable: true
   }));

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
   console.log('cellClicked', event);
 }, []);


/** 
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);
*/


 
 const onBtnExport = useCallback(() => {
  gridRef.current.api.exportDataAsCsv();
}, []);





const addDropZones = (params) => {
  var tileContainer = document.querySelector('.tile-container');
  var dropZone = {
    getContainer: () => {
      return tileContainer;
    },
    onDragStop: (params) => {
      var tile = createTile(params.node.data);
      tileContainer.appendChild(tile);
    },
  };
  params.api.addRowDropZone(dropZone);
};




 //<Button variant='primary' onClick={onBtnExport}> Download CSV file</Button>
 const fetcher = (url) => fetch(url).then((res) => res.json());

const { data, error, isLoading } = useSWR('https://gestion-wheat.vercel.app/personel/', fetcher, { refreshInterval: 1000 })

 
if (error) return <div>failed to load</div>
if (isLoading) return <div>Loading...</div>


 return (
<Box>
  
     {/* Example using Grid's API */}
<Stack spacing={2}>
  <Stack display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
<Typography variant='h6' color='text.secondary' > Tableau des Personnel</Typography>
     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <Stack display="flex" flexDirection="row" gap="20px" >
    <Ajouterpersonnel/>
     </Stack>
</Stack>
     <div className="ag-theme-balham" style={{width: '100%', height: 300}}>

       <AgGridReact
           ref={gridRef} // Ref for accessing Grid's API
           rowData={data} // Row Data for Rows
           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties
           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          // rowSelection='multiple' // Options - allows click selection of rows
           //onCellClicked={cellClickedListener} // Optional - registering for Grid Event
           pagination={true}
          enableRtl={row.locale === "ar"? true : false}
           />
     </div>
     </Stack>
</Box>

 );
};

export default TablePersonel;