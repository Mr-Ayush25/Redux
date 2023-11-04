import { parseISO, formatDistanceToNow } from "date-fns"; // Import the parseISO and formatDistanceToNow functions from the date-fns library

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp); // Parse the provided timestamp string into a Date object
    const timePeriod = formatDistanceToNow(date); // Calculate the time period between the date and the current time
    timeAgo = `${timePeriod} ago`; // Create a string with the time period and "ago"
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo; // Export the TimeAgo component
