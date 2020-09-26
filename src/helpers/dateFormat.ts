export const dateFormatLong = (date: string) => {
  const convertedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  };

  return convertedDate.toLocaleDateString("default", options);
  // return `${convertedDate.getDay()}-${convertedDate.getMonth()}-${convertedDate.getFullYear()} ${convertedDate.getHours()}:${convertedDate.getMinutes()}`;
};
