import React from "react";

function TdeeResult({ tdee, bmr, maintainCalories }) {
  return (
    <div>
      {tdee !== null && ( // Chỉ hiển thị khi có kết quả
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">TDEE của bạn là:</h5>
            <h3 className="card-text text-success">{tdee}</h3>
            <p className="card-text">Calo 1 ngày</p>
          </div>
        </div>
      )}

      {bmr !== null && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">BMR của bạn là:</h5>
            <h3 className="card-text text-success">{bmr}</h3>
            <p className="card-text">Calo 1 ngày</p>
          </div>
        </div>
      )}

      {maintainCalories !== null && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Lượng calo cần thiết:</h5>
            <h3 className="card-text text-success">{maintainCalories}</h3>
            <p className="card-text">Calo 1 ngày</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TdeeResult;
