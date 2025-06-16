import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Notification from "./Notification";

function Header({ notificationItems = [] }) {
  const [toggleNotification, setToggleNotification] = useState(false);
  const { user, logout } = useAuth();


  const handleLogout = () => {
    logout();
  };

  const handleNotificationToggle = () =>
    setToggleNotification(!toggleNotification);

  return (
    <header className="header">
      <div className="full-logo"></div>

      <nav>
        {user && (
          <Link
            to={
              user.role === "student"
                ? "/student-dashboard"
                : user.role === "admin"
                ? "/admin-dashboard"
                : "/"
            }
          >
            Jobs
          </Link>
        )}
        <Link to="/">Home</Link>
        <Link to="https://www.satyug.edu.in/contact-us/">Contact</Link>
        <Link to="https://www.satyug.edu.in/">About</Link>
      </nav>
      <div className="auth-buttons">
        <ion-icon
          name="mail-unread-outline"
          onClickCapture={handleNotificationToggle}
        ></ion-icon>
        {localStorage.getItem("token") ? (
          <Link to="/" className="btn" onClickCapture={handleLogout}>
            Logout
          </Link>
        ) : (
          <div className="btns">
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
      {toggleNotification && localStorage.getItem("token") && (
        <div className="notification-block">
          <ul>
            <li>
              <Link to="https://www.jobhai.com/back-office-data-entry-data-operator-job-in-spackle-biotech-private-limited-gandhi-colony-faridabad-0-to-0-years-1747631903-5985526-jid">
                <h4 className="title">Data Operator</h4>
                <p className="desc">
                  Spackle Biotech Private Limited in Faridabad, located at
                  Gandhi Colony, is looking for detail-oriented and organized
                  candidates for Data Operator to join their team. The role
                  involves updating accurate data in databases, spreadsheets,
                  and systems as required. With a collaborative environment and
                  growth opportunities, the position offers ₹18500 - ₹28500
                  salary.
                </p>
                <small>~ From JobHai.com</small>
              </Link>
            </li>
            <li>
              <Link to="https://www.jobhai.com/back-office-data-entry-document-verification-office-job-in-spackle-biotech-private-limited-block-h-delta-2-greater-noida-0-to-0-years-1747631947-5985486-jid">
                <h4 className="title">Document Verification (Office)</h4>
                <p className="desc">
                  Spackle Biotech Private Limited in Greater Noida, located at
                  Block H Delta 2, is looking for detail-oriented and organized
                  candidates for Document Verification (Office) to join their
                  team. The role involves updating accurate data in databases,
                  spreadsheets, and systems as required. With a collaborative
                  environment and growth opportunities, the position offers
                  ₹18500 - ₹28500 salary.
                </p>
                <small>~ From JobHai.com</small>
              </Link>
            </li>
            <li>
              <Link to="https://www.jobhai.com/back-office-data-entry-banking-assistant-job-in-spackle-biotech-private-limited-sector-3-vaishali-ghaziabad-0-to-0-years-1747631921-5985508-jid">
                <h4 className="title">Banking Assistant</h4>
                <p className="desc">
                  Spackle Biotech Private Limited in Ghaziabad, located at
                  Sector 3 Vaishali, is looking for detail-oriented and
                  organized candidates for Banking Assistant to join their team.
                  The role involves updating accurate data in databases,
                  spreadsheets, and systems as required. With a collaborative
                  environment and growth opportunities, the position offers
                  ₹18500 - ₹28500 salary.
                </p>
                <small>~ From JobHai.com</small>
              </Link>
            </li>
            <li>
              <Link to="https://www.jobhai.com/graphic-web-designer-senior-graphic-designer-job-in-aurinko-healthcare-private-limited-sector-74-faridabad-2-to-3-years-1747813832-5998808-jid">
                <h4 className="title">Senior Graphic Designer</h4>
                <p className="desc">
                  Create visual designs and graphics for print or digital media
                  and websites Provide creative ideas as per company's
                  requirements
                </p>
                <small>~ From JobHai.com</small>
              </Link>
            </li>
            <Notification notificationItems={notificationItems} />
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
