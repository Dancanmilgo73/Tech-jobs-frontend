export default function calcDays(datePosted) {
  let date1 = new Date(datePosted);
  let date2 = new Date();
  let diff_in_time = date2.getTime() - date1.getTime();
  if (getDays(date1, date2, diff_in_time) < 30) {
    return getDays(date1, date2, diff_in_time) + " days ago";
  }
  if (getWeeks(date1, date2, diff_in_time) < 4) {
    return getWeeks(date1, date2, diff_in_time) + " weeks ago";
  }

  if (getWeeks(date1, date2, diff_in_time) > 4) {
    return "over a month ago";
  }
}

function getDays(date1, date2, diff_in_time) {
  let days = diff_in_time / (1000 * 3600 * 24);
  return days.toFixed(0);
}

function getWeeks(date1, date2, diff_in_time) {
  let diff = diff_in_time / 1000;
  diff /= 60 * 60 * 24 * 7;
  return Math.abs(Math.round(diff));
}
