import React from "react";
import "./AddButton.css";

interface IAddButton {
  title: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddButton: React.FC<IAddButton> = ({ title, handleClick }) => {
  return (
    <div className="add-button">
      <button type="button" onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default AddButton;
