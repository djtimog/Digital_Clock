window.onload = function () {
  let body = document.querySelector("body");
  let date = new Date();
  let seconds = () => {
    let second = date.getSeconds();
    if (
      second == "1" ||
      second == "2" ||
      second == "3" ||
      second == "4" ||
      second == "5" ||
      second == "6" ||
      second == "7" ||
      second == "8" ||
      second == "9" ||
      second == "0"
    ) {
      second = "0" + second;
    }
    return second;
  };
  let minutes = () => {
    let minute = date.getMinutes();
    if (
      minute == "1" ||
      minute == "2" ||
      minute == "3" ||
      minute == "4" ||
      minute == "5" ||
      minute == "6" ||
      minute == "7" ||
      minute == "8" ||
      minute == "9" ||
      minute == "0"
    ) {
      minute = "0" + minute;
    }
    return minute;
  };
  let hours = () => {
    let hour = date.getHours();
    if (hour > "12") {
      hour %= 12;
    }
    if (
      hour == "1" ||
      hour == "2" ||
      hour == "3" ||
      hour == "4" ||
      hour == "5" ||
      hour == "6" ||
      hour == "7" ||
      hour == "8" ||
      hour == "9" ||
      hour == "0"
    ) {
      hour = "0" + hour;
    }
    if (hour == "00") {
      hour = "12";
    }
    return hour;
  };
  let days = () => {
    let day = date.getDate();
    if (
      day == "1" ||
      day == "2" ||
      day == "3" ||
      day == "4" ||
      day == "5" ||
      day == "6" ||
      day == "7" ||
      day == "8" ||
      day == "9" ||
      day == "0"
    ) {
      day = "0" + day;
    }
    return day;
  };
  let daysOfweek = () => {
    let dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday);
    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekdayName = weekdays[dayOfWeek];
    return weekdayName;
  };
  let months = () => {
    let month = date.toLocaleString("default", { month: "long" });
    return month;
  };
  let years = () => {
    let year = date.getFullYear();
    return year;
  };
  let amPm = () => {
    let time = date.getHours();
    let ampm = time >= 12 ? "PM" : "AM";
    return ampm;
  };

  body.innerHTML = `
         <div class="container">
         <h1 style="color: brown;">Mei Digital Clock</h1>
             <div class="content">
                 <div class="time-container">
                     <p class="time">${hours()}:${minutes()}.<span class="milliseconds">${seconds()}</span></p>
                     <p class="am-pm">${amPm()}</p>
                 </div>
                 <div class="d-o-day">
                     <p class="mm-dd-yyyy">${months()} ${days()}, ${years()}</p>
                     <p class="day">${daysOfweek()}</p>
                 </div>
             </div>
         </div>
     `;
};
setInterval(window.onload, 1000);
