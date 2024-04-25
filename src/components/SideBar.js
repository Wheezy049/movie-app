import React from "react";
import tv from "../tv.png"
import { FaCalendarAlt, FaHome, FaTv, FaVideo } from 'react-icons/fa';
import { IoIosLogOut } from "react-icons/io";

function SideBar() {
 return (
  <div className="sidebar">
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <img src={tv} alt="" style={{width: '40px'}} />
      <p style={{color: '#000', fontSize: '1.2rem', fontWeight: '600'}}>MovieBox</p>
     </div>
     <div style={{marginTop: '80px'}}>
      <div style={{display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '15px'}}>
         <FaHome />
         <p>Home</p>
      </div>
      <div style={{display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '15px'}}>
         <FaVideo />
         <p>Movies</p>
      </div>
      <div style={{display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '15px'}}>
         <FaTv />
         <p>Tv Series</p>
      </div>
      <div style={{display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '15px'}}>
         <FaCalendarAlt />
         <p>Upcoming</p>
      </div>
     </div>
     <div style={{backgroundColor: '#fee2e2', borderRadius: '12px', border: '1px solid red', height: '130px', width: '130px', marginTop: '40px',padding: '10px'}}>
      <h4 style={{fontSize: '13px'}}>Play movies quizes and earn free ticket</h4>      
      <p style={{fontSize: '9px'}}>50k people are watching now</p>
      <button style={{fontSize: '10px', marginLeft: '10px', padding: '2px', display: 'flex', justifyContent: 'center', border: '1px solid red', borderRadius: '5px',  backgroundColor: '#fecaca'}}>Start playing</button>
     </div>
     <div style={{marginTop: '50px', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <IoIosLogOut />
      <p>Logout</p>
     </div>
  </div>
 )
}

export default SideBar