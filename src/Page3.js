import React from "react";

function Page3() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#a50000" }}
      >
        <div className="container">
          <a href="./home.html" className="navbar-brand fw-bold d-flex">
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
            <div className="col-12">
              <div className="d-md-flex">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#720000",
                    border: 0,
                    height: "48px",
                  }}
                  className="btn btn-primary btn-block text-24 fw-bold mb-2"
                >
                  TĂNG CÂN
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#720000",
                    border: 0,
                    height: "48px",
                  }}
                  className="btn btn-primary btn-block text-24 fw-bold mx-5 mb-2"
                >
                  GIẢM CÂN
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#720000",
                    border: 0,
                    height: "48px",
                  }}
                  className="btn btn-primary btn-block text-24 fw-bold mb-2"
                >
                  DUY TRÌ
                </button>
              </div>
              <div
                style={{
                  border: "2px solid #fff",
                  borderRadius: "8px",
                  width: "100%",
                }}
                className="p-3 d-md-flex my-3"
              >
                <img
                  src="./image/gym-1.png"
                  alt=""
                  className="me-3 mb-2"
                  style={{ width: "200px", height: "110px" }}
                />
                <div className="d-flex flex-column">
                  <h3 className="text-24 text-white">
                    TẬP GYM BAO LÂU THÌ ĐẸP? CÁC GIAI ĐOẠN THAY ĐỔI CỦA CƠ THỂ
                  </h3>
                  <p className="text-16 text-white">
                    Hầu hết các bạn mới đi tập gym đều thắc mắc là tập gym bao
                    lâu thì đẹp? Tập một hai tháng đã đẹp lên hay chưa? Bạn thấy
                    một dòng quảng cáo trên Facebook về các khóa học tập gym, có
                    ghi tập gym có múi bụng sau 7 ngày, tập gym có body đẹp sau
                    một tháng…
                  </p>
                </div>
              </div>
              <div
                style={{
                  border: "2px solid #fff",
                  borderRadius: "8px",
                  width: "100%",
                }}
                className="p-3 d-md-flex my-3"
              >
                <img
                  src="./image/gym2.jpg"
                  alt=""
                  className="me-3 mb-2"
                  style={{ width: "200px", height: "110px" }}
                />
                <div className="d-flex flex-column">
                  <h3 className="text-24 text-white">
                    SỮA TƯƠI TÁCH BÉO LÀ GÌ? TẬP GYM UỐNG SỮA TÁCH BÉO CÓ TỐT
                    KHÔNG?
                  </h3>
                  <p className="text-16 text-white">
                    Sữa tươi tách béo trở thành sản phẩm được nhiều gymer quan
                    tâm và sử dụng vì cho rằng nó đã được tách béo hoàn toàn nên
                    không ảnh hưởng nhiều đến cân nặng. Vậy sữa tươi tách béo là
                    gì?
                  </p>
                </div>
              </div>
              <div
                style={{
                  border: "2px solid #fff",
                  borderRadius: "8px",
                  width: "100%",
                }}
                className="p-3 d-md-flex my-3"
              >
                <img
                  src="./image/gym4.jpg"
                  alt=""
                  className="me-3 mb-2"
                  style={{ width: "200px", height: "110px" }}
                />
                <div className="d-flex flex-column">
                  <h3 className="text-24 text-white">
                    ĐẨY TẠ BAO NHIÊU KÝ PHÙ HỢP VỚI CƠ THỂ CHO CẢ NAM LẪN NỮ
                  </h3>
                  <p className="text-16 text-white">
                    Đẩy tạ với số ký phù hợp với cơ thể sẽ giúp bạn phát triển
                    cơ bắp hiệu quả, tránh được những chấn thương trong quá
                    trình tập luyện. Với những người mới bắt đầu tập chưa biết
                    chọn tạ bao nhiêu thì đừng bỏ qua bài viết này. CITIGYM sẽ
                    giúp bạn lựa chọn số tại phù hợp với cơ thể cho cả nam lẫn
                    nữ.
                  </p>
                </div>
              </div>
              <div
                style={{
                  border: "2px solid #fff",
                  borderRadius: "8px",
                  width: "100%",
                }}
                className="p-3 d-md-flex my-3"
              >
                <img
                  src="./image/gym3.jpg"
                  alt=""
                  className="me-3 mb-2"
                  style={{ width: "200px", height: "110px" }}
                />
                <div className="d-flex flex-column">
                  <h3 className="text-24 text-white">
                    LÝ DO BUỒN NGỦ SAU KHI TẬP GYM? CÁCH KHẮC PHỤC TÌNH TRẠNG
                    TRÊN
                  </h3>
                  <p className="text-16 text-white">
                    Buồn ngủ sau khi tập gym là hiện tượng khá phổ biến, khiến
                    nhiều người lo lắng. Thực chất đây là tình trạng bình thường
                    khi cơ thể tiêu hao quá nhiều năng lượng. Để tìm hiểu lý do
                    cũng như cách khắc phục vấn đề buồn ngủ sau khi tập luyện,
                    cùng fitness giải đáp trong bài viết này nhé!
                  </p>
                </div>
              </div>
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

export default Page3;
