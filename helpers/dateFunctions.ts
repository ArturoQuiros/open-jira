import { formatDistanceToNow } from "date-fns";

export const getFormatDateToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date);
  return fromNow;
};
