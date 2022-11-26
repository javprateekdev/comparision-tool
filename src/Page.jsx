import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import {getalldata} from './api'
import style from './style.css';
import GenericPdfDownloader from "./GenericPdfDownloader";

const Page = () => {
  
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

  const [users2,setUsers2] = useState([]);
  const [data2,setdata2] = useState([]);
 
  const getAllUsers2=(selectedOptions)=>{
     let response= selectedOptions;
     setUsers2(response)
     console.log(response)
    }
    useEffect(() => {
   
     getdata2()
  }, []);
 
  const getdata2 = async () => {
      let response = await getalldata();
      setdata2(response.data);
  }
  const [users3,setUsers3] = useState([]);
  const [data3,setdata3] = useState([]);
 
  const getAllUsers3=(selectedOptions)=>{
     let response= selectedOptions;
     setUsers3(response)
     console.log(response)
    }
    useEffect(() => {
   
     getdata3()
  }, []);
 
  const getdata3 = async () => {
      let response = await getalldata();
      setdata3(response.data);
  }


  return (
    <>
 
        
   <section>

  <h1>HOUSETHAT COMPARISION TOOL</h1>
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Code</th>
          <th> <div></div><Select
       
       onChange={getAllUsers}
       options={data}
       style={{height:"10px",width:"10px"}}
     />

     </th>
          <th><Select
       
       onChange={getAllUsers2}
       options={data2}
       style={{height:"10px",width:"10px"}}
     /></th>
          <th><Select
       
       onChange={getAllUsers3}
       options={data3}
       style={{height:"10px",width:"10px"}}
     /></th>
          
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>Name</td>
          <td>{users.name}</td>
          <td>{users2.name}</td>
          <td>{users3.name}</td>
          
        </tr>
        <tr>
          <td>Project Plot Area</td>
          <td>{users.ProjectPlotArea}</td>
          <td>{users2.ProjectPlotArea}</td>
          <td>{users3.ProjectPlotArea}</td>
        
        </tr>
        <tr>
          <td>Green Area</td>
          <td>{users.GreenArea}</td>
          <td>{users2.GreenArea}</td>
          <td>{users3.GreenArea}</td>
        
        </tr>
        <tr>
          <td>Property Status</td>
          <td>{users.PropertyStatus}</td>
          <td>{users2.PropertyStatus}</td>
          <td>{users3.PropertyStatus}</td>
          
        </tr>
        <tr>
          <td>Price Range</td>
          <td>{users.PriceRange}</td>
          <td>{users2.PriceRange}</td>
          <td>{users3.PriceRange}</td>
          
        </tr>
        <tr>
          <td>Total Towers</td>
          <td>{users.TotalTowers}</td>
          <td>{users2.TotalTowers}</td>
          <td>{users3.TotalTowers}</td>
          
        </tr>
        <tr>
          <td>Total Flats</td>
          <td>{users.TotalFlats}</td>
          <td>{users2.TotalFlats}</td>
          <td>{users3.TotalFlats}</td>
          
        </tr>
        <tr>
          <td>OC Status</td>
          <td>{users.OCStatus}</td>
          <td>{users2.OCStatus}</td>
          <td>{users3.OCStatus}</td>
          
        </tr>
        <tr>
          <td>Density</td>
          <td>{users.Density}</td>
          <td>{users2.Density}</td>
          <td>{users3.Density}</td>
          
        </tr>
        <tr>
          <td>Podium/Non-Podium</td>
          <td>{users.PodiumNonPodium}</td>
          <td>{users2.PodiumNonPodium}</td>
          <td>{users3.PodiumNonPodium}</td>
          
        </tr>
        <tr>
          <td>Approved Bank</td>
          <td>{users.ApprovedBank}</td>
          <td>{users2.ApprovedBank}</td>
          <td>{users3.ApprovedBank}</td>
          
        </tr>
        <tr>
          <td>Club House Size</td>
          <td>{users.ClubHouseSize}</td>
          <td>{users2.ClubHouseSize}</td>
          <td>-{users3.ClubHouseSize}</td>
          
        </tr>
        <tr>
          <td>Construction Type</td>
          <td>{users.ConstructionType}</td>
          <td>{users2.ConstructionType}</td>
          <td>{users3.ConstructionType}</td>
          
        </tr>
        <tr>
          <td>Tower Heights</td>
          <td>{users.TowerHeights}</td>
          <td>{users2.TowerHeights}</td>
          <td>{users3.TowerHeights}</td>
         
        </tr>
        <tr>
          <td>Lift Per Tower</td>
          <td>{users.LiftperTower}</td>
          <td>{users2.LiftperTower}</td>
          <td>{users3.LiftperTower}</td>
         
        </tr>
        <tr>
          <td>Floor vs Flats</td>
          <td>{users.FloorvsFlats}</td>
          <td>{users2.FloorvsFlats}</td>
          <td>{users3.FloorvsFlats}</td>
          
        </tr>
        <tr>
          <td>Possesion Date</td>
          <td>{users.PossessionDate}</td>
          <td>{users2.PossessionDate}</td>
          <td>{users3.PossessionDate}</td>
          
        </tr>
        <tr>
          <td>Lobby</td>
          <td>{users.Lobby}</td>
          <td>{users2.Lobby}</td>
          <td>{users3.Lobby}</td>
          
        </tr>
        <tr>
          <td>Lobby</td>
          <td>{users.Distance}</td>
          <td>{users2.Distance}</td>
          <td>{users3.Distance}</td>
          
        </tr>
        <tr>
          <td>Distance</td>
          <td>{users.Distance}</td>
          <td>{users2.Distance}</td>
          <td>{users3.Distance}</td>
          
        </tr>
       
      </tbody>
    </table>
  </div>
</section>












</>
   
  )
}

export default Page;