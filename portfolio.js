document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const day = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("currentTime").textContent = utcTime;
    document.getElementById("currentDay").textContent = day;
  }

  updateTime();
  setInterval(updateTime, 6000);
});
