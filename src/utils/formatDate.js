import { formatDistanceToNow, format } from "date-fns";

export function timeAgo(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function displayTime(date, formatString = "MMM dd, yyyy") {
  return format(new Date(date), formatString);
}
