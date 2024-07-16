import React, { useState } from "react";
import TdeeResult from "./TdeeResult";

function TdeeCalculator() {
  // ... (Code của component TdeeCalculator giữ nguyên)
  const [gender, setGender] = useState("Nam");
  const [age, setAge] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("Ít vận động");
  const [goal, setGoal] = useState("Duy trì hiện tại");
  const [showGainOptions, setShowGainOptions] = useState(false);
  const [showLoseOptions, setShowLoseOptions] = useState(false);

  const [showResults, setShowResults] = useState(false);
  const [tdee, setTdee] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [maintainCalories, setMaintainCalories] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ... (Logic tính toán TDEE, BMR, maintainCalories dựa trên input)
    // ...

    // Cập nhật state với kết quả
    setTdee(2232); // Thay bằng kết quả tính toán thực tế
    setBmr(1440); // Thay bằng kết quả tính toán thực tế
    setMaintainCalories(2232); // Thay bằng kết quả tính toán thực tế

    // Hiển thị kết quả
    setShowResults(true);
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-6 mb-2">
        <h3 className="text-21 fw-bold text-white mb-4 text-left">
          CÔNG CỤ TÍNH TDEE ONLINE
        </h3>
        <p className="text-white">
          Tính lượng calo cần thiết cho cơ thể mỗi ngày
        </p>
        <p className="text-white">
          Cho chúng mình xin vài thông tin để tính TDEE cho bạn nhé.
        </p>

        <div className="form-wrap">
          <form id="tdee-form" onSubmit={handleSubmit} className="row g-3">
            {/* Giới tính */}
            <div className="col-md-12">
              <label htmlFor="gender" className="form-label text-18 text-white">
                Giới tính:
              </label>
              <div
                className="btn-group d-flex"
                role="group"
                aria-label="Gender"
              >
                <button
                  type="button"
                  className={`btn ${
                    gender === "Nam" ? "btn-primary" : "btn-outline-light"
                  }`}
                  onClick={() => setGender("Nam")}
                >
                  Nam
                </button>
                <button
                  type="button"
                  className={`btn ${
                    gender === "Nữ" ? "btn-primary" : "btn-outline-light"
                  }`}
                  onClick={() => setGender("Nữ")}
                >
                  Nữ
                </button>
              </div>
            </div>

            {/* Tuổi */}
            <div className="col-md-12">
              <label htmlFor="age" className="form-label text-17 text-white">
                Tuổi:
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Nhập tuổi"
                required
              />
            </div>

            {/* Chiều cao */}
            <div className="col-md-6">
              <label htmlFor="feet" className="form-label text-17 text-white">
                Chiều cao (feet):
              </label>
              <input
                type="number"
                className="form-control"
                id="feet"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                placeholder="feet"
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="inches"
                className="form-label text-177 text-white"
              >
                Chiều cao (inches):
              </label>
              <input
                type="number"
                className="form-control"
                id="inches"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                placeholder="inches"
              />
            </div>

            {/* Cân nặng */}
            <div className="col-md-12">
              <label htmlFor="weight" className="form-label text-17 text-white">
                Cân nặng (lbs):
              </label>
              <input
                type="number"
                className="form-control"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="lbs"
              />
            </div>

            {/* Cường độ tập luyện */}
            <div className="col-md-12">
              <label
                htmlFor="activityLevel"
                className="form-label text-17 text-white"
              >
                Cường độ tập luyện:
              </label>
              <select
                className="form-select"
                id="activityLevel"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <option>Ít vận động</option>
                <option>Vận động nhẹ (1-3 buổi/tuần)</option>
                <option>Vận động vừa (3-5 buổi/tuần)</option>
                <option>Vận động nặng (6-7 buổi/tuần)</option>
                <option>Vận động rất nặng (2 buổi/ngày)</option>
              </select>
            </div>

            {/* Mục tiêu của bạn */}
            <div className="col-md-12">
              <label htmlFor="goal" className="form-label text-17 text-white">
                Mục tiêu của bạn:
              </label>
              <div className="btn-group d-flex" role="group" aria-label="Goal">
                <button
                  type="button"
                  className={`btn ${
                    goal === "Giảm mỡ" ? "btn-primary" : "btn-outline-light"
                  }`}
                  onClick={() => {
                    setGoal("Giảm mỡ");
                    setShowLoseOptions(true);
                    setShowGainOptions(false); // Ẩn phần chọn cách tăng cân
                  }}
                >
                  Giảm mỡ
                </button>
                <button
                  type="button"
                  className={`btn ${
                    goal === "Duy trì hiện tại"
                      ? "btn-primary"
                      : "btn-outline-light"
                  }`}
                  onClick={() => {
                    setGoal("Duy trì hiện tại");
                    setShowLoseOptions(false);
                    setShowGainOptions(false); // Ẩn phần chọn cách tăng cân
                  }}
                >
                  Duy trì hiện tại
                </button>

                <button
                  type="button"
                  className={`btn ${
                    goal === "Tăng cân" ? "btn-primary" : "btn-outline-light"
                  }`}
                  onClick={() => {
                    setGoal("Tăng cân");
                    setShowGainOptions(true); // Hiển thị phần chọn cách tăng cân
                    setShowLoseOptions(false);
                  }}
                >
                  Tăng cân
                </button>
              </div>
            </div>

            {/* Hiển thị phần chọn cách giảm cân nếu goal là "Giảm mỡ" */}
            {showLoseOptions && (
              <div>
                <div className="col-md-12">
                  <label
                    htmlFor="targetWeight"
                    className="form-label text-17 text-white"
                  >
                    Mục tiêu cân nặng (lbs):
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="targetWeight"
                  />
                </div>
                <div className="col-md-12">
                  <label
                    htmlFor="loseSpeed"
                    className="form-label text-17 text-white"
                  >
                    Tốc độ:
                  </label>
                  <div className="btn-group-vertical d-flex" role="group">
                    <button type="button" className="btn btn-outline-light">
                      Chậm
                    </button>
                    <button type="button" className="btn btn-outline-light">
                      Bình thường
                    </button>
                    <button type="button" className="btn btn-outline-light">
                      Nhanh
                    </button>
                    <button type="button" className="btn btn-outline-light">
                      Cấp tốc
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Hiển thị phần chọn cách tăng cân nếu goal là "Tăng cân" */}
            {showGainOptions && (
              <div className="col-md-12">
                <label
                  htmlFor="gainSpeed"
                  className="form-label text-17 text-white"
                >
                  Bạn muốn tăng cân thế nào?
                </label>
                <select className="form-select" id="gainSpeed">
                  <option>Chậm</option>
                  <option>Bình thường</option>
                  <option>Nhanh</option>
                </select>
              </div>
            )}

            {/* Nút bấm */}
            <div className="col-12 text-center">
              <button
                type="submit"
                id="calculateTdee"
                className="btn btn-success btn-lg"
              >
                Tính TDEE
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Cột cho kết quả */}
      <div className="col-12 col-lg-6 mb-2">
        {showResults && (
          <TdeeResult
            tdee={tdee}
            bmr={bmr}
            maintainCalories={maintainCalories}
          />
        )}
      </div>
    </div>
  );
}

export default TdeeCalculator;
