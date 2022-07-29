import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const siteHistory = useHistory()

  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <button className="btn btn-primary" onClick={() => {siteHistory.push("/")}}>Go Home</button>
    </div>
  );
}

export default NotFound;
