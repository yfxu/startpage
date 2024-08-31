function updateTime() {
  let now = new Date(Date.now());
  let nowYear = now.getFullYear();
  let nowMonth = now.getMonth();
  let nowDate = now.getDate();
  let nowDay = now.getDay();
  let nowHours = now.getHours();
  let nowMinutes = now.getMinutes();
  let nowSeconds = now.getSeconds();

  let nowDayString = {
    0: "日",
    1: "月",
    2: "火",
    3: "水",
    4: "木",
    5: "金",
    6: "土",
  }[nowDay];
  let nowHoursString = String(nowHours).padStart(2, "0");
  let nowMinutesString = String(nowMinutes).padStart(2, "0");
  let nowSecondsString = String(nowSeconds).padStart(2, "0");
  
  document.getElementById("year").innerHTML = nowYear;
  document.getElementById("month").innerHTML = nowMonth;
  document.getElementById("date").innerHTML = nowDate;
  document.getElementById("day").innerHTML = nowDayString;
  document.getElementById("hours").innerHTML = nowHoursString;
  document.getElementById("minutes").innerHTML = nowMinutesString;
  document.getElementById("seconds").innerHTML = nowSecondsString;
}

updateTime();
setInterval(updateTime, 1000);
