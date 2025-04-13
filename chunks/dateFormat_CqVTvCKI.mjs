import { format } from 'date-fns';

const dateFormat = (date, pattern = "yyyy-MM-dd") => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern);
  return output;
};

export { dateFormat as d };
