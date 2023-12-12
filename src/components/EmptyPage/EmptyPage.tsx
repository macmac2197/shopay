import React from "react";
import { Link } from "react-router-dom";
import "./EmptyPage.css";

const EmptyPage: React.FC = () => {
  return (
    <div className="empty-container">
      <div className="empty-text">Empty Page</div>
      <div>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
};

export default EmptyPage;
