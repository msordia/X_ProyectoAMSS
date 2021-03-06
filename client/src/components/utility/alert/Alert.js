import React from "react";
import "./Alert.css";

export default function Alert(props) {
  let colorStyle = props.error
    ? { background: "rgba(219, 10, 73, 0.9)" }
    : { background: "rgba(81, 81, 81, 0.9)" };
  let message = props.error ? props.error : props.success;
  return (
    <div className="Alert" style={colorStyle}>
      {message}
      <button onClick={props.close}>X</button>
    </div>
  );
}
