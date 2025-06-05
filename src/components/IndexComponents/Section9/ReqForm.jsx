import React from "react";
import "./Section9.css";

const ReqForm = () => {
  const defaultVal = (e) => {
    e.target.value = "";
  };
  return (
    <form className="ReqForm" action="">
      <h1 className="ReqACons">Request A Consultation</h1>
      <br />
      <input type="text" onClick={defaultVal} placeholder="Email or Phone" />
      <br />
      <br />
      <textarea
        defaultValue="Describe briefly your case."
        placeholder="Describe briefly your case here...."
        onClick={defaultVal}
        cols="15"
        rows="9"
      ></textarea>
      <br />
      <br />
      <button className="ContactUsNowReqBForm">Contact Us Now</button>
    </form>
  );
};

export default ReqForm;
