import React, { useContext } from "react";
import { Context } from "../../main";

const MyProfile = () => {
  const { user, error } = useContext(Context);

  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message
  }

  if (!user) {
    return <div>Loading...</div>; // Display a loading message
  }

  return (
    <section className="profile">
      <div className="avatar">
        {/* <img src="/user.jpg" alt="User Avatar" /> Corrected image path */}
      </div>
      <div className="user-detail">
        <p>
          Name: <span>{user.name}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          Phone: <span>{user.phone}</span>
        </p>
        <p>
          Role: <span>{user.role}</span>
        </p>
      </div>
    </section>
  );
};

export default MyProfile;
