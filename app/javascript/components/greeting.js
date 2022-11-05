// Path: app\javascript\components\greeting.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting, addGreeting } from "../redux/greeting/greetingSlice";

const greeting = () => {
  const dispatch = useDispatch();
  const selectGreeting = useSelector((state) => state.greeting);
  console.log(selectGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

};

export default greeting;
