import React from "react";

function JobCard({ job, isAdmin, onDelete, showJob }) {
  return (
    <div
      className="job-card"
      onClick={() => {
        showJob(job.title, job.description, job.skills);
      }}
    >
      <div className="company">
        <div className="img">
          <img src="/Logo.png" alt="name" />
        </div>
        <div className="creteria">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      </div>
      <div className="tags">
        {job.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <div className="require">
        <span>
          <strong>Attendance</strong>: 70% above
        </span>
        <span>
          <strong>Needed</strong>: All clear
        </span>
        <span>
          <strong>Space</strong>: 15
        </span>
      </div>
      <div className="actions">
        {isAdmin ? (
          <button onClick={() => onDelete(job.id)}>Delete Job</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default JobCard;
