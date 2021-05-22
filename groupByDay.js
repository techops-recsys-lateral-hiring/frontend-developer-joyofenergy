const dateString = (utc) => {
  const date = new Date(utc);
  const dateString =
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${dateString}`;
};

export const readingsByDay = (data) => {
  return data.reduce((curr, next) => {
    if (!curr[dateString(next.time)]) curr[dateString(next.time)] = 0;
    curr[dateString(next.time)] += next.value;
    return curr;
  }, {});
};

export const getSortedByTime = (data) => {
  const tupleWithUTCTime = Object.entries(data).map(([dateString, value]) => [
    Date.parse(dateString),
    dateString,
    value,
  ]);

  return tupleWithUTCTime.sort((a, b) => a[0] - b[0]);
};
