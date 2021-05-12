export const generateData = (length = 1200, reading) => {
    const startTime = new Date();
    const hour = 1000 * 60 * 60;
    return [...new Array(length)].map((_, index) => ({
        time: startTime - index * hour,
        reading: reading || Math.random() * 0.7 + 0.4,
    }));
};
