import React from "react";

import styles from "../css/CustomInput.module.css";

export const KEYS_ACCEPTED = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Backspace",
  "Delete",
  "Enter",
];

export const regex = /^[0-9]*$/gm;

interface Props {
  name: string;
  value: string;
  func: React.KeyboardEventHandler<HTMLInputElement>;
}

const CustomInput = React.forwardRef<HTMLInputElement, Props>(
  ({ name, value, func }, ref) => {
    return (
      <div className={styles["input-flex"]}>
        <div className={styles["input-flex"]}>
          <p>{name}:</p>
          <p>{parseInt(value)}</p>
        </div>
        <input
          type="text"
          onKeyDown={(e) => {
            !KEYS_ACCEPTED.includes(e.key) && e.preventDefault();
          }}
          onKeyPress={func}
          ref={ref}
          placeholder="new value"
        />
      </div>
    );
  }
);

export default CustomInput;
