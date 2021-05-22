export const generateReadings = (length = 1200, value) => {
  const startTime = new Date();
  const hour = 1000 * 60 * 60;
  return [...new Array(length)].map((_, index) => ({
    time: startTime - index * hour,
    value: value || Math.random() * 0.7 + 0.4,
  }));
};
