import React, { useState } from "react";

function TdeeCalculator() {
  // ... (Code của component TdeeCalculator giữ nguyên)
  const [gender, setGender] = useState("Nam");
  const [age, setAge] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("Ít vận động");
  const [goal, setGoal] = useState("Duy trì hiện tại");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện tính toán TDEE và xử lý logic ở đây
    // ...
    console.log("Form submitted!");
  };

  //   return (
  //     <div className="col-12 col-lg-6 mb-2">
  //       <h3 className="text-24 fw-bold text-white mb-4 text-left">
  //         CÔNG CỤ TÍNH TDEE ONLINE
  //       </h3>
  //       <p className="text-white">
  //         Tính lượng calo cần thiết cho cơ thể mỗi ngày
  //       </p>
  //       <p className="text-white">
  //         Cho chúng mình xin vài thông tin để tính TDEE cho bạn nhé.
  //       </p>

  //       <div className="d-flex flex-column">
  //         <div className="form-wrap">
  //           <form id="tdee-form" onSubmit={handleSubmit}>
  //             {/* Giới tính */}
  //             <div className="form-group mb-3">
  //               <label htmlFor="gender" className="text-18 text-white mb-2">
  //                 Giới tính:
  //               </label>
  //               <div className="btn-group" role="group" aria-label="Gender">
  //                 <button
  //                   type="button"
  //                   className={`btn ${
  //                     gender === "Nam" ? "btn-primary" : "btn-outline-light"
  //                   }`}
  //                   onClick={() => setGender("Nam")}
  //                 >
  //                   Nam
  //                 </button>
  //                 <button
  //                   type="button"
  //                   className={`btn ${
  //                     gender === "Nữ" ? "btn-primary" : "btn-outline-light"
  //                   }`}
  //                   onClick={() => setGender("Nữ")}
  //                 >
  //                   Nữ
  //                 </button>
  //               </div>
  //             </div>

  //             {/* Tuổi */}
  //             <div className="form-group mb-3">
  //               <label htmlFor="age" className="text-18 text-white mb-2">
  //                 Tuổi:
  //               </label>
  //               <input
  //                 type="number"
  //                 className="form-control"
  //                 id="age"
  //                 value={age}
  //                 onChange={(e) => setAge(e.target.value)}
  //                 placeholder="Nhập tuổi"
  //                 required
  //               />
  //             </div>

  //             {/* Chiều cao */}
  //             <div className="form-row mb-3">
  //               <div className="form-group col-6">
  //                 <label htmlFor="feet" className="text-18 text-white mb-2">
  //                   Chiều Cao:
  //                 </label>
  //                 <input
  //                   type="number"
  //                   className="form-control"
  //                   id="feet"
  //                   placeholder="ft"
  //                   value={feet}
  //                   onChange={(e) => setFeet(e.target.value)}
  //                 />
  //               </div>
  //               <div className="form-group col-6">
  //                 <label htmlFor="inches" className="text-18 text-white mb-2">
  //                   {" "}
  //                 </label>
  //                 <input
  //                   type="number"
  //                   className="form-control"
  //                   id="inches"
  //                   placeholder="in"
  //                   value={inches}
  //                   onChange={(e) => setInches(e.target.value)}
  //                 />
  //               </div>
  //             </div>

  //             {/* Cân nặng */}
  //             <div className="form-group mb-3">
  //               <label htmlFor="weight" className="text-18 text-white mb-2">
  //                 Cân nặng:
  //               </label>
  //               <input
  //                 type="number"
  //                 className="form-control"
  //                 id="weight"
  //                 placeholder="lbs"
  //                 value={weight}
  //                 onChange={(e) => setWeight(e.target.value)}
  //               />
  //             </div>

  //             {/* Tình theo: (Tôi lược bỏ phần này do thiếu thông tin) */}

  //             {/* Cường độ tập luyện */}
  //             <div className="form-group mb-3">
  //               <label
  //                 htmlFor="activityLevel"
  //                 className="text-18 text-white mb-2"
  //               >
  //                 Cường độ tập luyện:
  //               </label>
  //               <select
  //                 className="form-control"
  //                 id="activityLevel"
  //                 value={activityLevel}
  //                 onChange={(e) => setActivityLevel(e.target.value)}
  //               >
  //                 <option>Ít vận động</option>
  //                 <option>Vận động nhẹ (1-3 buổi/tuần)</option>
  //                 <option>Vận động vừa (3-5 buổi/tuần)</option>
  //                 <option>Vận động nặng (6-7 buổi/tuần)</option>
  //                 <option>Vận động rất nặng (2 buổi/ngày)</option>
  //               </select>
  //             </div>

  //             {/* Mục tiêu của bạn */}
  //             <div className="form-group mb-3">
  //               <label htmlFor="goal" className="text-18 text-white mb-2">
  //                 Mục tiêu của bạn:
  //               </label>
  //               <div className="btn-group d-flex" role="group" aria-label="Goal">
  //                 <button
  //                   type="button"
  //                   className={`btn ${
  //                     goal === "Giảm mỡ" ? "btn-primary" : "btn-outline-light"
  //                   }`}
  //                   onClick={() => setGoal("Giảm mỡ")}
  //                 >
  //                   Giảm mỡ
  //                 </button>
  //                 <button
  //                   type="button"
  //                   className={`btn ${
  //                     goal === "Duy trì hiện tại"
  //                       ? "btn-primary"
  //                       : "btn-outline-light"
  //                   }`}
  //                   onClick={() => setGoal("Duy trì hiện tại")}
  //                 >
  //                   Duy trì hiện tại
  //                 </button>
  //                 <button
  //                   type="button"
  //                   className={`btn ${
  //                     goal === "Tăng cân" ? "btn-primary" : "btn-outline-light"
  //                   }`}
  //                   onClick={() => setGoal("Tăng cân")}
  //                 >
  //                   Tăng cân
  //                 </button>
  //               </div>
  //             </div>

  //             {/* Nút bấm */}
  //             <div className="row">
  //               <div className="col-md-6 mx-auto">
  //                 <button
  //                   type="submit"
  //                   id="calculateTdee"
  //                   className="btn btn-success btn-block text-24 fw-bold py-2"
  //                 >
  //                   Tính TDEE
  //                 </button>
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default TdeeCalculator;

  return (
    <div className="col-12 col-lg-6 mb-2">
      <h3 className="text-24 fw-bold text-white mb-4 text-left">
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
            <div className="btn-group d-flex" role="group" aria-label="Gender">
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
            <label htmlFor="age" className="form-label text-18 text-white">
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
            <label htmlFor="feet" className="form-label text-18 text-white">
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
            <label htmlFor="inches" className="form-label text-18 text-white">
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
            <label htmlFor="weight" className="form-label text-18 text-white">
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
              className="form-label text-18 text-white"
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
            <label htmlFor="goal" className="form-label text-18 text-white">
              Mục tiêu của bạn:
            </label>
            <div className="btn-group d-flex" role="group" aria-label="Goal">
              <button
                type="button"
                className={`btn ${
                  goal === "Giảm mỡ" ? "btn-primary" : "btn-outline-light"
                }`}
                onClick={() => setGoal("Giảm mỡ")}
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
                onClick={() => setGoal("Duy trì hiện tại")}
              >
                Duy trì hiện tại
              </button>
              <button
                type="button"
                className={`btn ${
                  goal === "Tăng cân" ? "btn-primary" : "btn-outline-light"
                }`}
                onClick={() => setGoal("Tăng cân")}
              >
                Tăng cân
              </button>
            </div>
          </div>

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
  );
}

export default TdeeCalculator;
