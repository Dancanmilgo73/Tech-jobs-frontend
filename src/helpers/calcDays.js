export default function calcDays(datePosted) {
  let date1 = new Date(datePosted);
  let date2 = new Date();
  let diff_in_time = date2.getTime() - date1.getTime();
  if (getDays(date1, date2, diff_in_time) > 31) {
    return "over a month ago";
  } else if (
    getDays(date1, date2, diff_in_time) < 31 &&
    getDays(date1, date2, diff_in_time) > 7
  ) {
    return getWeeks(date1, date2, diff_in_time) + " weeks ago";
  } else {
    return getDays(date1, date2, diff_in_time) < 2
      ? "yesterday"
      : getDays(date1, date2, diff_in_time) + " days ago";
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
