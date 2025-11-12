function updateClock() {
  let date = new Date();

  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let string = hours + ":" + min + ":" + sec;
  document.getElementById("clock").innerText = string;
}

setInterval(updateClock, 1000);
