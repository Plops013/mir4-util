export function parseTime(str) {
  let values = str.split(":");
  let hour = parseInt(values[0]);
  let minutes = parseInt(values[1]);
  let seconds = parseInt(values[2]);
  let d = new Date();
  d.setHours(hour);
  d.setMinutes(minutes);
  d.setSeconds(seconds);
  return d;
}

export function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  return {
    seconds,
    minutes,
    hours,
  };
}
