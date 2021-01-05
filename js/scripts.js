let defaultTheme = true; // declares default color theme
let timeFormat = true; // where true = 24h and false = 12h format
showTime();

// Switches between dark and light color theme
function themeSwitcher() {
  if (defaultTheme === true) {
    document.getElementById("lnk").href = "css/style_light.css";
    // changes button text to display "Dark theme"
    defaultTheme = false;
  } else {
    document.getElementById("lnk").href = "css/style_dark.css";
    defaultTheme = true;
  }
}

// evaluates boolean and calls appropriate function
function showTime() {
  if (timeFormat === true) {
    show24();
  } else {
    show12();
  }
}

// switches between clock formats
function formatSwitcher() {
  //prettier-ignore
  if (timeFormat === true) {
    show12();
    timeFormat = false;
  }
  // prettier-ignore
  else {
    show24();
    timeFormat = true;
  }
}

// 12-hour clock
function show12() {
  let date = new Date(); // Date object
  let h = date.getHours(); // 0-23
  let m = date.getMinutes(); // 0-59
  let s = date.getSeconds(); // 0-59
  let session = "AM";

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12; // creates 12-hour system
    session = "PM"; // appends PM if hour is greater than 12
  }

  if (h < 10) {
    h = "0" + h; // appends "0" prefix if hour is less than 10
  }

  if (m < 10) {
    m = "0" + m; // adds "0" prefix if minute is less than 10
  }

  if (s < 10) {
    s = "0" + s; // adds "0" prefix if second is less than 10
  }

  let time = h + ":" + m + ":" + s + " " + session; // formats time into readable fashion

  document.getElementById("myClockDisplay").innerText = time;
  document.getElementById("myClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}

// 24-hour clock
function show24() {
  let date = new Date(); // Date object
  let h = date.getHours(); // 0-23
  let m = date.getMinutes(); // 0-59
  let s = date.getSeconds(); // 0-59

  if (h < 10) {
    h = "0" + h; // appends "0" prefix if hour is less than 10
  }

  if (m < 10) {
    m = "0" + m; // adds "0" prefix if minute is less than 10
  }

  if (s < 10) {
    s = "0" + s; // adds "0" prefix if second is less than 10
  }

  let time = h + ":" + m + ":" + s + " "; // formats time into readable fashion

  document.getElementById("myClockDisplay").innerText = time;
  document.getElementById("myClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
