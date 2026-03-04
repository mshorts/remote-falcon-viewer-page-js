function getNextChristmas(now) {
  let christmas = new Date(now.getFullYear(), 11, 25);
  if (now > christmas) {
    christmas = new Date(now.getFullYear() + 1, 11, 25);
  }
  return christmas;
}

function countdown() {
  let now = new Date();
  let eventDate = getNextChristmas(now);

  let actualTime = now.getTime();
  let eventTime = eventDate.getTime();
  let remTime = Math.max(0, eventTime - actualTime);

  let totalSeconds = Math.floor(remTime / 1000);
  let d = Math.floor(totalSeconds / 86400);
  let h = Math.floor((totalSeconds % 86400) / 3600);
  let m = Math.floor((totalSeconds % 3600) / 60);
  let s = totalSeconds % 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (document.querySelector("#to-christmas-days") != null) {
    document.querySelector("#to-christmas-days").textContent = d;
  }
  if (document.querySelector("#to-christmas-hours") != null) {
    document.querySelector("#to-christmas-hours").textContent = h;
  }
  if (document.querySelector("#to-christmas-minutes") != null) {
    document.querySelector("#to-christmas-minutes").textContent = m;
  }
  if (document.querySelector("#to-christmas-seconds") != null) {
    document.querySelector("#to-christmas-seconds").textContent = s;
  }

  setTimeout(countdown, 1000);
}

countdown();