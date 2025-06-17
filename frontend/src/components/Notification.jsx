import React from "react";
import { Link } from "react-router-dom";

function Notification({ notificationItems=[] }) {
  
  return (
    <>
      {notificationItems && notificationItems.map((item,index) => {
        <li key={index}>
          <Link to="/student-dashboard">
            <h4 className="title">{item.title}</h4>
            <p className="desc">{item.description}</p>
          </Link>
        </li>
      })}
    </>
  );
}

export default Notification;
