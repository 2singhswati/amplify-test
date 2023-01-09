import React from "react";
//import Select from 'react-select';
import {useEffect, useState } from 'react';
import office from "./office.jpg";


function App() {

  const offices = [
    {id:"1",name:"Adelaide - ADL11"},
    {id:"2",name:"Brisbane - BNE12"},
    {id: "3", name: "Canberra - CBR11"},
    {id: "4", name: "Melbourne - MEL11"},
    {id: "5", name: "Perth - PER11"},
    {id: "6", name: "Sydney - SYD12"},
    {id: "7", name: "Sydney - SYD15"}
  ];

  const states = [
    {id:"1",officeId:"1",name:"ADL11-01"},
    {id:"2",officeId:"2",name:"BNE12-28"},
    {id:"3",officeId:"2",name:"BNE12-29"},
    {id:"4",officeId:"2",name:"BNE12-20"},
    {id:"5",officeId:"3",name:"CBR11-10"},
    {id:"6",officeId:"4",name:"MEL11-14"},
    {id:"7",officeId:"4",name:"MEL11-17"},
    {id:"8",officeId:"4",name:"MEL11-18"},
    {id:"9",officeId:"5",name:"PER11-09"},
    {id:"10",officeId:"6",name:"SYD12-05"},
    {id:"11",officeId:"6",name:"SYD12-06"},
    {id:"12",officeId:"6",name:"SYD12-20"},
    {id:"13",officeId:"6",name:"SYD12-25"},
    {id:"14",officeId:"6",name:"SYD12-26"},
    {id:"15",officeId:"6",name:"SYD12-29"},
    {id:"16",officeId:"6",name:"SYD12-30"},
    {id:"17",officeId:"6",name:"SYD12-32"},
    {id:"18",officeId:"6",name:"SYD12-35"},
    {id:"19",officeId:"6",name:"SYD12-37"},
    {id:"20",officeId:"7",name:"SSYD15-08"},
    {id:"21",officeId:"7",name:"SYD15-09"},
    {id:"22",officeId:"7",name:"SYD15-11"},
    {id:"23",officeId:"7",name:"SYD15-12"},
    {id:"24",officeId:"7",name:"SYD15-13"},
    {id:"25",officeId:"7",name:"SYD15-16"},
    {id:"26",officeId:"7",name:"SYD15-18"},
    
  ]
  
  // let type = null;
  // var image = document.createElement("img");
  // image.src = {office};

  // var image2 = document.createElement("img2");
  // image2.src = {office};


  const [ officesaws, setOffice] = useState([]);
  const [ state, setState] = useState([]);
  
  // if (state === "ADL11-01") {
  //   type = image;
  // } else if (state === "Language") {
  //   type = image2;
  // } 
  
  
  useEffect(()=>{
    setOffice(offices);
  },[])

  const handleofficesaws = (id) => {
    const dt = states.filter(x => x.officeId === id);
    setState(dt);
  }

 
  return (
    <div className="App">
    <h1 align = "center">Select your office Floor Plans</h1>
      <select id="ddlofficesaws" className='form-control select-class' onChange={(e) => handleofficesaws(e.target.value)}>
        <option value="0">Select office location</option>
      {
        officesaws && 
        officesaws !== undefined ?
        officesaws.map((ctr,index) => {
            return(
                <option key={index} value={ctr.id}>{ctr.name}</option>
            )
        })
        :"No officesaws"

      }
      </select>
      <br></br>
      <select id="ddlStates" className='form-control select-class'>
        <option value="0">Select the floor you want</option>
      {
        state && 
        state !== undefined ?
        state.map((ctr,index) => {
            return(
                <option key={index} value={ctr.id}>{ctr.name}</option>
            )
        })
        :"No State"
      }
        </select>
    </div>
  );
}

export default App;