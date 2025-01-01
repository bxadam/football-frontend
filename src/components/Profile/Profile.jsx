import React from "react";
import "./Profile.css";
import UserProfile from "../UserProfile/UserProfile";
import Favorites from "../Favorites/Favorites";

function Profile() {
  return (
    <div className="profile">
      <UserProfile></UserProfile>
      <Favorites></Favorites>
    </div>
  );
}

export default Profile;
