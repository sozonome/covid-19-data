export const dateFormatLong = (date: Date | string, time = true) => {
  const convertedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const optionsWithoutTime: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return convertedDate.toLocaleDateString(
    "default",
    time ? options : optionsWithoutTime
  );
};
