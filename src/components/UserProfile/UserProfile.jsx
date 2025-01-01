import React from "react";
import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="user">
      <img src="" alt="" className="user__avatar" />
      <div className="user__info">
        <h2 className="user__info__name"></h2>
        <p className="user__info__team"></p>
        <p className="user__info__player"></p>
      </div>
    </div>
  );
}

export default UserProfile;
