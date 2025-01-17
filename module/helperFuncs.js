//time function
//https://gist.github.com/indexzero/6261ad9292c78cf3c5aa69265e2422bf

// convert the UNIX timestamp

export const convertUnixTime = (unix_time_stamp, timezone) => {
  return moment
    .unix(unix_time_stamp)
    .utcOffset(timezone / 60)
    .format("HH:mm A");
};

// Convert the Kelvin to Celcius
export const convertToCel = (kelvin) => {
  let celcius = parseInt(kelvin - 273.15);
  return celcius;
};

// Create specific array

export const createArray = (info, newArray) => {
  newArray["Visibility"] = info.visibility;
  newArray["Wind"] = info.wind.speed;
  newArray["Humidity"] = info.main.humidity;
  newArray["Pressure"] = info.main.pressure;
  return newArray;
};

// Generate day + time
let date = new Date();
const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const generateDayTime = (key) => {
  let nextDate = new Date(date);
  nextDate.setDate(date.getDate() + key);
  let nextDay = shortDays[nextDate.getDay()];
  let dayDate = nextDate.getDate();

  return nextDay + " " + dayDate;
};
