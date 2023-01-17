import React from "react";
//import Select from 'react-select';
import {useEffect, useState } from 'react';
import office from "./office.jpg";


function App() {

  const offices = [
    {id:"1",name:"Singapore - SIN1"},
    {id:"2",name:"Singapore - SIN13"},
    {id: "3", name: "Atlanta - ATL12"},
  
  ];

  const states = [
    {id:"1",officeId:"1",name:"SIN1-06"},
    {id:"2",officeId:"1",name:"SIN1-08"},
    {id:"3",officeId:"2",name:"SIN13-09"},
    {id:"4",officeId:"2",name:"SIN13-18"},
    {id:"5",officeId:"3",name:"ATL12-12"},
  
  ]

  const rooms = [
    {id: "1", stateid: "1", name: "06.206 CALDECOTT MTG RM" },
    {id: "2", stateid: "1", name: "CONFERENCE BENCOOLEN 06.406"},
    {id: "3", stateid: "1", name: "CONFERENCE HILLVIEW 06.407"},
    {id: "4", stateid: "1", name: "DOVER ROOM"},
    {id: "5", stateid: "1", name: "HOLLAND VILLAGE TRAINING 06.204"},
    {id: "6", stateid: "1", name: "CONFERENCE SIXTH AVENUE 06.300"},
    {id: "7", stateid: "1", name: "KENTRIDGE MEETING 06.200"},
    {id: "8", stateid: "1", name: "K06.207 MOUNTBATTEN MTG RM"},
    {id: "9", stateid: "2", name: "08.108 CONFERENCE ESPLANADE"},
    {id: "10", stateid: "2", name: "08.109 CONFERENCE PROMENADE"},
    {id: "11", stateid: "2", name: "08.303 CONFERENCE SOMERSET"},
    {id: "12", stateid: "2", name: "08.104 CONFERENCE MERLION"},
    {id: "13", stateid: "2", name: "08.107 CONFERENCE SENTOSA"},
    {id: "14", stateid: "2", name: "08.105 CONFERENCE CITY HALL"},
    {id: "15", stateid: "2", name: "08.110 CONFERENCE 12 BAYFRONT"},
    {id: "16", stateid: "2", name: "08.111 CONFERENCE HARBOURFRONT"},
    {id: "17", stateid: "2", name: "08.102 CONFEREN BOTANIC GARDENS"},
    {id: "18", stateid: "2", name: "08.103 CONFERENCE ORCHARD ROAD"},
    {id: "19", stateid: "2", name: "SELEGIE ROAD 19.301"},
    {id: "20", stateid: "3", name: "MR 19.100"},
    {id: "21", stateid: "3", name: "CLUNY ROAD 19.200"},
    {id: "22", stateid: "3", name: "CAIRNHILL ROAD"},
    {id: "23", stateid: "3", name: "EMERALD HILL ROAD 9.104"},
    {id: "24", stateid: "3", name: "CLAYMORE HILI"},
    {id: "25", stateid: "3", name: "NAPIER ROAD 19.300"},
    {id: "26", stateid: "3", name: "DRYCOTT DRIVE 19.101"},
    {id: "27", stateid: "4", name: "SMALL CONV 18.101"},
    {id: "28", stateid: "4", name: "ANGULLIA PARK 18.401"},
    {id: "29", stateid: "4", name: "STEVENS ROAD 18.201"},
    {id: "30", stateid: "4", name: "GRANGE ROAD 18.200"},
    {id: "31", stateid: "5", name: "Conference (AV) 12.300"},
    {id: "32", stateid: "5", name: "Conference (AV) 12.407"},

  ]
  
  // let type = null;
  // var image = document.createElement("img");
  // image.src = {office};

  // var image2 = document.createElement("img2");
  // image2.src = {office};


  const [ officesaws, setOffice] = useState([]);
  const [ state, setState] = useState([]);
  const [ room, setRoom] = useState([]);
  
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

  const handleroomsaws = (id) => {
    const rt = rooms.filter(x => x.stateid === id);
    setRoom(rt);
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
      <select id="ddlStates" className='form-control select-class' onChange = {(e) => handleroomsaws(e.target.value)}>
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

      <br></br>
      <select id="ddlStates" className='form-control select-class'>
        <option value="0">Select the rroom you want</option>
      {
        room && 
        room!== undefined ?
        room.map((ctr,index) => {
            return(
                <option key={index} value={ctr.id}>{ctr.name}</option>
            )
        })
        :"No Room"
      }
        </select>

    </div>
  );
}

export default App;