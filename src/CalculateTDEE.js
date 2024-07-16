import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TdeeCalculator from "./TdeeCalculator";
import TdeeResult from "./TdeeResult";

function Page2() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#a50000" }}
      >
        <div className="container">
          <a href="./homepage.html" className="navbar-brand fw-bold d-flex">
            <img src="./image/logo.svg" alt="logo" />
            <img className="ms-4" src="./image/logo-name.svg" alt="logo-name" />
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
                <a className="nav-link px-3" href="#">
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
              <li className="nav-item">
                <a href="nav-link px-3">
                  <img
                    src="./image/noti.svg"
                    alt="noti"
                    style={{ width: "28px" }}
                  />
                </a>
              </li>
              <li className="nav-item ms-3">
                <a href="nav-link px-3">
                  <img
                    src="./image/user.svg"
                    alt="user"
                    style={{ width: "28px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        style={{
          backgroundColor: "#a50000",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-2">
              <div
                className="rounded-4 p-3"
                style={{
                  borderColor: "white",
                  border: "2px solid #fff",
                  borderRadius: "8px",
                }}
              >
                <h3 className="text-24 fw-bold text-white mb-4 text-center">
                  TDEE là gì? Tính TDEE giảm cân lành mạnh
                </h3>
                <p className="text-16 text-white">
                  TDEE (Total Daily Energy Expenditure) là tất cả năng lượng cần
                  thiết cho hoạt động mỗi ngày của bạn. Tính TDEE giúp bạn đạt
                  được mục tiêu dinh dưỡng (giảm cân, tăng cân) của bạn.
                </p>
                <p className="text-16 text-white">
                  Xác định chỉ số TDEE sẽ giúp bạn biết rõ lượng calo nên tăng
                  hoặc giảm để đạt hiệu quả cutting (giảm cân) hay bulking (tăng
                  cân). Nói cách khác, TDEE giúp cân bằng năng lượng để đạt được
                  hiệu quả giảm cân nhưng không gây ra những tác động tiêu cực
                  đến sức khỏe.
                </p>
                <p className="text-16 text-white mb-5">
                  Tính TDEE giảm cân giúp chúng ta phân biệt được một cách tương
                  đối năng lượng của thực phẩm hay năng lượng cần thiết để duy
                  trì hoạt động. Từ đó xây dựng cho mình một chế độ ăn phù hợp
                  với bản thân.
                </p>
                <h3 className="text-24 fw-bold text-white mb-4 text-center">
                  Tại sao bạn cần phải tính calo?
                </h3>
                <p className="text-16 text-white">
                  Chúng ta thường không để ý xem mình đã ăn bao nhiêu trong một
                  bữa dù việc này rất cần thiết, đặc biệt đối với những bạn muốn
                  giảm cân.
                </p>
                <p className="text-16 text-white">
                  Chúng ta vẫn luôn nghĩ rằng chỉ cần ăn ít hơn bình thường là
                  đã có thể giảm được cân rồi. Điều này không sai, nhưng có thể
                  dẫn đến việc thiếu những chất cần thiết dành cho cơ thể
                </p>
                <p className="text-16 text-white">
                  Vì thế khi ăn, đặc biệt là khi giảm cân, bạn nên tính cho mình
                  một lượng calo cần thiết nạp vào cơ thể trong một ngày.Việc
                  này không chỉ giúp bạn kiểm soát được lượng ăn mà còn có thể
                  chia khẩu phần ăn sao cho đủ chất. Bạn cũng có thể chia ra
                  thành nhiều bữa ăn trong một ngày nhưng vẫn dựa trên tổng
                  lượng calo đã tính.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6 mb-2">
              <TdeeCalculator />
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
                  alt="logo-name"
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

export default Page2;
