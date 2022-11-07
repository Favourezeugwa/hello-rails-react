// Path: app\javascript\components\greeting.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/greeting/greetingSlice";

const greeting = () => {
  const dispatch = useDispatch();
  const selectGreeting = useSelector((state) => state.greeting);
  console.log(selectGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      <h2>Refresh the page to see a new greeting</h2>
      <ul>
        {selectGreeting.map((greeting) => (
          <li>{greeting.greeting}</li>
        ))}
      </ul>
    </>
  );
};

export default greeting;
