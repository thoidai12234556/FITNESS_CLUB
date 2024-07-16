import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Page2 from "./CalculateTDEE";
import Page3 from "./Blog";

function PageHome() {
  //btn Get started => page2
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/calculate-tdee");
  };

  return (
    // ... (toàn bộ code hiện tại trong function App() của bạn) ...
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#a50000" }}
      >
        <div className="container">
          <a href="./home.html" className="navbar-brand fw-bold d-flex">
            <img src="./image/logo.svg" alt="logo" />
            <img className="ms-4" src="./image/logo-name.svg" alt="logo name" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ marginRight: "40px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active px-4"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-3"
                  href="#"
                  onClick={handleGetStartedClick}
                >
                  TDEE/BMI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  BLOGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  VIDEO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        style={{
          backgroundColor: "#a50000",
          paddingTop: "180px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 style={{ fontSize: "64px" }} className="text-white">
                REACH YOUR LIMITS <br />
                AND GET TO THE <br />
                NEXT LEVEL
              </h1>
              <div className="text-18 text-white py-5">
                The resistance that you fight physically in the gym and the
                resistance that you fight in life can only build a strong
                character
              </div>
              <button
                onClick={handleGetStartedClick}
                className="text-white text-24 fw-bold rounded-2 border-0"
                style={{
                  width: "200px",
                  height: "48px",
                  backgroundColor: "#040404",
                  marginBottom: "100px",
                }}
              >
                Get started
              </button>
              <div
                className="d-flex justify-content-between"
                style={{ width: "30%", marginBottom: "50px" }}
              >
                <a href="#">
                  <img
                    src="./image/youtube.svg"
                    alt="youtube"
                    style={{ width: "40px" }}
                  />
                </a>
                <a href="#">
                  <img
                    src="./image/discord.svg"
                    alt="discord"
                    style={{ width: "40px" }}
                  />
                </a>
                <a href="#">
                  <img
                    src="./image/instagram.svg"
                    alt="instagram"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src="./image/bg-gym1.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <footer style={{ background: "#720000", padding: "50px 0px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-3 col-6 my-auto">
              <div className="d-flex">
                <img src="./image/logo.svg" alt="logo" />
                <img
                  className="ms-4"
                  src="./image/logo-name.svg"
                  alt="logo name"
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="d-flex flex-column">
                <div
                  className="text-white text-20 fw-bold"
                  style={{ marginBottom: "20px" }}
                >
                  About
                </div>
                <div
                  className="text-16 text-white"
                  style={{ marginBottom: "20px" }}
                >
                  Product
                </div>
                <div
                  className="text-16 text-white"
                  style={{ marginBottom: "20px" }}
                >
                  Resource
                </div>
                <div className="text-16 text-white">Term & Condition</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="d-flex flex-column">
                <div
                  className="text-white text-20 fw-bold"
                  style={{ marginBottom: "20px" }}
                >
                  Contact
                </div>
                <a
                  className="text-16 text-decoration-none text-white"
                  style={{ marginBottom: "20px" }}
                  href="tel:+012 3456789"
                >
                  +012 3456789
                </a>
                <a
                  className="text-16 text-decoration-none text-white"
                  style={{ marginBottom: "20px" }}
                  href="mailto:ApkLib@gmail.com"
                >
                  fitnessclub@gmail.com
                </a>
                <div
                  className="d-flex justify-content-between"
                  style={{ width: "50%" }}
                >
                  <a href="#">
                    <img src="./image/youtube.svg" alt="youtube" />
                  </a>
                  <a href="#">
                    <img src="./image/discord.svg" alt="discord" />
                  </a>
                  <a href="#">
                    <img src="./image/instagram.svg" alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagehome" element={<PageHome />} />
        <Route path="/calculate-tdee" element={<Page2 />} />
        <Route path="/blog" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
