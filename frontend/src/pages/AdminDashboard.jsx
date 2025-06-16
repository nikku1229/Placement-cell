import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import { useAuth } from "../context/AuthContext";
import axios from "../services/api";

function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    skills: "",
  });
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState("");
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [notificationItems, setNotificationItems] = useState([]);
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

  const addJob = async () => {
    try {
      await axios.post("/api/jobs", newJob);
      fetchJobs();
      const notify = {
        title: newJob.title,
        description: newJob.description,
      };
      setNotificationItems((prev) => [...prev, notify]);
      setNewJob({ title: "", description: "", skills: "" });
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const showJob = (title, des, skills) => {
    setTitle(title);
    setDesc(des);
    setSkills(skills);
  };

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <Header notificationItems={notificationItems} />
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
        </div>
        <div className="jobs-list">
          <div>
            {!showForm ? (
              <button className="toggle-btn" onClick={toggleForm}>
                Add Job
              </button>
            ) : (
              <button className="toggle-btn" onClick={toggleForm}>
                Done
              </button>
            )}
          </div>
          <div>
            {showForm && (
              <form className="add-job-form" action={addJob}>
                <input
                  type="text"
                  placeholder="Job Title"
                  value={newJob.title}
                  onChange={(e) =>
                    setNewJob({ ...newJob, title: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newJob.description}
                  onChange={(e) =>
                    setNewJob({ ...newJob, description: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Skills (comma separated)"
                  value={newJob.skills}
                  onChange={(e) =>
                    setNewJob({ ...newJob, skills: e.target.value.split(",") })
                  }
                  required
                />
                <button className="add-job-btn" type="submit">
                  Add Job
                </button>
              </form>
            )}
          </div>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isAdmin={true}
              onDelete={deleteJob}
              showJob={showJob}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
