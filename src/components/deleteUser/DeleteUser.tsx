import React from "react";
import "./delete_user.scss";

export default function DeleteUser({
  setIsDeleteUser,
}: {
  setIsDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="delete_user">
      <div className="delete_user_container">
        <h1 className="delete_user_title">Permanently Delete Your Account?</h1>
        <div className="buttons">
          <button
            className="cancel_delete"
            onClick={() => setIsDeleteUser((c: any) => !c)}
          >
            Cancel
          </button>
          <button
            className="sure_delete"
            onClick={() => setIsDeleteUser((c: any) => !c)}
          >
            Sure
          </button>
        </div>
      </div>
    </div>
  );
}
