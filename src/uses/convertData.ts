export default function () {
  const convertTimestampToDateTime = (timestamp: string) => {
    const originalDate = new Date(timestamp);
    const year = originalDate.getUTCFullYear();
    const month = String(originalDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(originalDate.getUTCDate()).padStart(2, "0");
    const hours = String(originalDate.getUTCHours()).padStart(2, "0");
    const minutes = String(originalDate.getUTCMinutes()).padStart(2, "0");
    const seconds = String(originalDate.getUTCSeconds()).padStart(2, "0");

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  };
  return {
    convertTimestampToDateTime,
  };
}
