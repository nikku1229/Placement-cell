import React from "react";

function Sidebar({ user, title }) {
  const handleNextPage = () => {
    alert("This feature added soon");
  };

  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="img">
          <img src="/avatar.png" alt="User" />
        </div>
        <h3>{ user || "User"}</h3>
        <p>{ title || ""}</p>
        <button onClick={handleNextPage}>Edit Profile</button>
      </div>
      <div className="skills">
        <h4>Availability</h4>
        <div className="availability">
          {localStorage.getItem("token") ? (
            <>
              {title === "student" ? (
                <span>✅ Available to work</span>
              ) : (
                <span>✅ Placement Officer</span>
              )}  
            </>
          ) : (
            <span>❌Unavailable</span>
          )}
        </div>
        <h4>Skills and Expertise</h4>
        {localStorage.getItem("token") ? (
          <ul>
            {title === "student" ? (
              <>
                <li>React</li>
                <li>Figma</li>
                <li>Javascript</li>
                <li>MySql</li>
                <li>C++</li>
              </>
            ) : (
              <li>Skills added when profile edit available</li>
            )}
          </ul>
        ) : (
          <ul>
            <li>Please log in to view skills</li>
          </ul>
        )}
        <button onClick={handleNextPage}>View Profile</button>
      </div>
    </aside>
  );
}

export default Sidebar;
