function updateDateTime() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  const day = now.toLocaleString("en-us", { weekday: "long" });

  document.getElementById("currentTime").innerText = utcTime;
  document.getElementById("currentDay").innerText = day;
}

updateDateTime();
setInterval(updateDateTime, 1000);
