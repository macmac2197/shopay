import React, { ReactNode } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

import "./DialogBox.css";

interface IDialogBox {
  children?: ReactNode;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const DialogBox: React.FC<IDialogBox> = ({ children, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <div className="dialog-title">Successfully added to basket</div>
          <div className="dialog-close" onClick={onClose}>
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DialogBox;
