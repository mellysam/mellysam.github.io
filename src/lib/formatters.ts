export const VIENNA_TIME_ZONE = "Europe/Vienna";

const dateFormatter = new Intl.DateTimeFormat("de-AT", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: VIENNA_TIME_ZONE,
});

const timeFormatter = new Intl.DateTimeFormat("de-AT", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: VIENNA_TIME_ZONE,
});

export const formatDate = (date: Date) => dateFormatter.format(date);

export const formatTime = (date: Date) => timeFormatter.format(date);
