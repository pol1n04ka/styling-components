import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.sass";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  console.log();

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles.formControl} ${!isValid ? styles.invalid : ""}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
