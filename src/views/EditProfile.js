import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [username, setNewUsername] = useState("");
  return (
    <div>
      <Link to="/profile">
        <div style={{ position: "relative", right: "650px", top: "20px" }}>
          Back to profile
        </div>
      </Link>
      <div style={{ fontSize: "24px", position: "relative" }}>Profile</div>
      <div style={{ position: "relative", top: "50px" }}>
        <p>New Username</p>
        <input type="text" />
        <p style={{ position: "relative", top: "5px" }}>Confirm new Username</p>
        <input style={{ position: "relative", right: "0px" }} type="text" />
      </div>
      <input style={{ position: "relative", top: "100px" }} type="submit" />
    </div>
  );
};

export default EditProfile;
