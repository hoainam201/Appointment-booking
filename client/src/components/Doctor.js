import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <div>Chuyên khoa : {doctor.specialization}</div>
      <hr />
      <p>
        <b>Số điện thoại : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Địa chỉ : </b>
        {doctor.address}
      </p>
      <p>
        <b>Chi phí : </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Thời gian : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
