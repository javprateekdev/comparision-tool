import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import {getalldata} from './api'
import {Table,TableBody, TableCell, TableHead, TableRow ,styled,Button} from '@mui/material';

const StyledTable = styled(Table)`
    width: 30%;
    margin: 50px 0 0 50px;
    
`;
const StyledCell = styled(TableCell)`
& > tr {
  font-size: 16px;
  color: #3a3a3a;
  font-weight:700;
  font-style:capitalize;
  line-height: 1.5;
  letter-spacing:1px;
}
`;



export default function Project2() {
 
 const [users,setUsers] = useState([]);
 const [data,setdata] = useState([]);

 const getAllUsers=(selectedOptions)=>{
    let response= selectedOptions;
    setUsers(response)
    console.log(response)
   }
   useEffect(() => {
  
    getdata()
 }, []);

 const getdata = async () => {
     let response = await getalldata();
     setdata(response.data);
 }

  return (
    <div className="App">
      <Select
       
        onChange={getAllUsers}
        options={data}
      />
      <StyledTable>
    <TableHead>
      <TableCell>
      <StyledCell >
        <TableRow>{users.ProjectPlotArea}</TableRow>
        <TableRow>{users.GreenArea}</TableRow>
        <TableRow>{users.PropertyStatus}</TableRow>
        <TableRow>{users.PriceRange}</TableRow>
        <TableRow>{users.TotalTowers}</TableRow>
        <TableRow>{users.TotalFlats}</TableRow>
        <TableRow>{users.OCStatus}</TableRow>
        <TableRow>{users.PodiumNonPodium}</TableRow>
        <TableRow>{users.ApprovedBank}</TableRow>
        <TableRow>{users.ClubHouseSize}</TableRow>
        <TableRow>{users.ConstructionType}</TableRow>
        <TableRow>{users.TowerHeights}</TableRow>
        <TableRow>{users.LiftperTower}</TableRow>
        <TableRow>{users.FloorvsFlats}</TableRow>
        <TableRow>{users.PossessionDate}</TableRow>
       <TableRow>{users.Segment}</TableRow>
      </StyledCell >
      </TableCell>
      </TableHead>
    
</StyledTable>
    </div>
  );
}