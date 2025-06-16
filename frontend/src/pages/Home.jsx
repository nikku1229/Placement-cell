import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MessageSection from "../components/MessageSection";

function Home() {
  return (
    <div>
      <Header />

      <div className="socialmedia">
        <ul>
          <li>
            <Link to="https://wa.me/+917838166666">
              <div className="icon">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>
              <h6>WhatsApp</h6>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/school/sdiet/?viewAsMember=true">
              <div className="icon">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <h6>LinkedIn</h6>
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/satyugdarshantechnicalcampus/">
              <div className="icon">
                <ion-icon name="logo-facebook"></ion-icon>
              </div>
              <h6>Facebook</h6>
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/sdietfbd/">
              <div className="icon">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
              <h6>Instagram</h6>
            </Link>
          </li>
        </ul>
      </div>

      <div className="admission-block">
        <Link to="https://www.satyug.edu.in/admission/">
          <img
            src="https://www.satyug.edu.in/wp-content/uploads/2025/04/regitration.webp"
            alt="admission"
          />
        </Link>
      </div>

      <section className="sdiet">
        <h1>Training and placement cell</h1>
        <h2>Opportunities For The Jobs And Internships</h2>
      </section>

      <section className="overview" id="about">
        <h2>Overview of Our Institute</h2>

        <div className="overview-block">
          <div className="info">
            <h3>SDIET</h3>
            <p>
              The Training and Placement Cell/Institute Industry Interaction
              Cell at Satyug Darshan Institute of Engineering and Technology,
              Faridabad forms an integral part of our institution towards
              bridging the gap between academia and Industry, fostering a
              seamless transition from classroom to career. Empowering students
              with skills, knowledge and networking to pursue their chosen
              careers is what we strive for. We develop strong
              industry-institute partnerships that lead to training and
              development programs, internships and placements as well as
              employability skills enhancement and career prospects improvement.
              Guest lectures, workshops, seminars and industrial visits provide
              a comprehensive platform for students leaning toward a successful
              career. Our aim is to ensure every student passing out from SDIET
              possesses not only the skill set but also the confidence and
              networking opportunities to take his/her chosen career path
              immediately.
            </p>
            <Link to="https://www.satyug.edu.in" className="btn">
              https://www.satyug.edu.in
            </Link>
          </div>
          <div className="img"></div>
        </div>
      </section>

      <section className="alumni-detail">
        <h2>Our Alumni</h2>
        <ul>
          <li>
            <div className="details">
              <div className="img">
                <img
                  src="https://www.satyug.edu.in/wp-content/uploads/2025/05/Congratulations-Chitra.webp"
                  alt="profile-img1"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="details">
              <div className="img">
                <img
                  src="https://www.satyug.edu.in/wp-content/uploads/2025/05/congratulations-Sony.webp"
                  alt="profile-img2"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="details">
              <div className="img">
                <img
                  src="https://www.satyug.edu.in/wp-content/uploads/2025/05/Congratulations-Appsquadz.webp"
                  alt="profile-img3"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="details">
              <div className="img">
                <img
                  src="https://www.satyug.edu.in/wp-content/uploads/2025/05/congratulations-ksd.webp"
                  alt="profile-img4"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="details">
              <div className="img">
                <img
                  src="https://www.satyug.edu.in/wp-content/uploads/2025/05/Loom-Solar.webp"
                  alt="profile-img5"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="details">
              <div className="img">
                <img
                  src="https://www.satyug.edu.in/wp-content/uploads/2025/05/congratulations-planet-Spark.webp"
                  alt="profile-img6"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="details">
              <div className="img">
                <img
                  src="https://www.satyug.edu.in/wp-content/uploads/2025/05/congratulations-Qspide.webp"
                  alt="profile-img7"
                />
              </div>
            </div>
          </li>
        </ul>
      </section>

      <MessageSection />

      <section className="past-recruiters">
        <h2>Past Recruiters</h2>
        <div className="details">
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/08/Blix-media.webp"
              alt="Blix"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/08/byjus-1.webp"
              alt="byjus"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/08/Accenture.webp"
              alt="accenture"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/08/bolt.webp"
              alt="bolt"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/08/citibank.webp"
              alt="citibank"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2025/05/Infosys.webp"
              alt="infosys"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2025/05/capgemini.webp"
              alt="capgemini"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/10/wipro.png"
              alt="wipro"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/08/Kotak.webp"
              alt="kotak"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/10/true.png"
              alt="true"
            />
          </div>
          <div className="img">
            <img
              src="https://www.satyug.edu.in/wp-content/uploads/2024/08/de-soto-technologies.webp"
              alt="de-soto"
            />
          </div>
        </div>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>

        <div className="team-details">
          <div className="detail">
            <div className="img">
              <img
                src="https://www.satyug.edu.in/wp-content/uploads/2024/09/sumit-rathee-1.webp"
                alt="sumit rathee"
              />
            </div>
            <strong>Mr. Sumit Rathee</strong>
            <p>Training and placement cell officer</p>
            <p>
              <span>Email:</span> tpo@satyug.edu.in
            </p>
          </div>
          <div className="detail">
            <div className="img">
              <img
                src="https://www.satyug.edu.in/wp-content/uploads/2024/09/vineeta-chaudhary.webp"
                alt="vineeta chaudhary"
              />
            </div>
            <strong>Ms. Vineeta Chaudhary</strong>
            <p>Assistant Professor</p>
            <p>
              <span>Email:</span> vineeta.chaudhary@satyug.edu.in
            </p>
          </div>
          <div className="detail">
            <div className="img">
              <img
                src="https://www.satyug.edu.in/wp-content/uploads/2024/10/mr.srish-gupta.webp"
                alt="Srish gupta"
              />
            </div>
            <strong>Mr. Srish gupta</strong>
            <p>Assistant Professor</p>
            <p>
              <span>Email:</span> srish.gupta@satyug.edu.in
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
