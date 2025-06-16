import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import { useAuth } from "../context/AuthContext";
import axios from "../services/api";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_REACT_APP_GOOGLE_SCRIPT_URL;

function StudentDashboard() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState("");
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", proposal: "" });
  const { user } = useAuth();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("/api/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const showJob = (title, des, skills) => {
    setForm({ name: "Nitish", email: "nitish@gmail.com", proposal: title });
    setTitle(title);
    setDesc(des);
    setSkills(skills);
  };

  const submitJob = async (e) => {
    e.preventDefault();
    if (form.name) {
      try {
        const res = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `name=${form.name}&email=${form.email}&proposal=${form.proposal}`,
        });
        setForm({ name: "", email: "", proposal: "" });
        alert("Your Proposal has been send to your placement officer");
      } catch (err) {
        console.error(err);
        alert("Submit Error");
      }
    } else {
      alert("Select Job description");
    }
  };

  return (
    <>
      <Header />
      <div className="dashboard">
        <Sidebar
          user={user ? user.name : "User"}
          title={user ? user.role : ""}
        />
        <div className="job-desc">
          <div className="company">
            <div className="img">
              <img src="/Logo.png" alt="name" />
            </div>
            <div className="creteria">
              <h3>{title}</h3>
            </div>
          </div>

          <div className="overview">
            <strong>Placement Overview</strong>
            <p>{desc}</p>
          </div>

          <div className="skill-require">
            <strong>Skills</strong>
            <div className="skills">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="requirement-deatils">
            <strong>Required Details</strong>
            <span>
              <strong>Attendance</strong>: {title ? "70% above" : ""}
            </span>
            <span>
              <strong>Needed</strong>: {title ? "All clear" : ""}
            </span>
            <span>
              <strong>Space</strong>: {title ? "15" : ""}
            </span>
          </div>

          {localStorage.getItem("token") && title && (
            <div className="submit-proposal">
              <button type="button" onClick={submitJob}>
                Submit a proposal
              </button>
            </div>
          )}
        </div>
        <div className="jobs-list">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} showJob={showJob} />
          ))}
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
