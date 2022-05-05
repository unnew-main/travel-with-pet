export const formatDate = (date: Date) => {
  const formattedDate = [ date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
  return formattedDate;
};
