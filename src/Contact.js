import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleGetStartedClick = () => {
    navigate("/calculate-tdee");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý gửi thông tin liên lạc (ví dụ: gửi đến API)
    console.log("Tên:", name);
    console.log("Số điện thoại:", phone);
    console.log("Email:", email);
    // Sau khi gửi, bạn có thể chuyển hướng người dùng hoặc hiển thị thông báo thành công
    navigate("/pagehome"); // Chuyển hướng về trang chủ sau khi gửi thành công
  };

  return (
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
                  href="http://localhost:3000/pagehome"
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
                <a className="nav-link px-3" href="http://localhost:3000/blog">
                  BLOGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  VIDEO
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="container-fluid py-5" // Thêm class py-5 để tạo padding top & bottom
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://s3.ap-northeast-1.amazonaws.com/h.files/images/1721319999842_srh42U4mzm.jpg" // Thay bằng đường dẫn ảnh nền của bạn
              alt="Contact Us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Liên hệ</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">
                  Họ tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Đăng ký
              </button>
            </form>
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

export default Contact;
