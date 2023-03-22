import { useEffect, useState } from "react";
import "../../sass/components/Time/Time.sass";
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const addZero = (i: number | string) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const Time = () => {
  const D = new Date();
  let second = addZero(D.getSeconds());
  let minute = addZero(D.getMinutes());
  let hour = addZero(D.getHours());
  let day = DAY[D.getDay()];
  let month = MONTH[D.getMonth()];
  let num = D.getDate();
  let year = D.getFullYear();

  const [Dsecond, setDSecond] = useState(second);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let D = new Date();
      let second = addZero(D.getSeconds());
      setDSecond(second);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container">
      <div>
        <h1>{hour}</h1>
        <span>:</span>
        <h1>{minute}</h1>
        <p>{Dsecond}</p>
      </div>
      <div>
        <h2>{day + ","}</h2>
        <h2>{month}</h2>
        <h2>{num + ","}</h2>
        <h2>{year}</h2>
      </div>
    </div>
  );
};

export default Time;
