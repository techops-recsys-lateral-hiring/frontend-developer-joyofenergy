import { generateReadings } from "./generateReadings";
import { getSortedByTime, readingsByDay } from "./groupByDay";

describe("group data by day", () => {
    it("should group readings into N days", () => {
        const last60hours = 60;
        const readings = readingsByDay(generateReadings(last60hours));
        const keys = Object.keys(readings);
        expect(keys.length).toBe(3);
    });
});

describe("sort data by day", () => {
    it("should add the utc Date to each given reading", () => {
        const readings = readingsByDay(generateReadings(480));
        const readingWithUTCTime = getSortedByTime(readings)[0];
        const utcDate = readingWithUTCTime[0];
        const dateString = readingWithUTCTime[1];
        const readingValue = readingWithUTCTime[2];

        const dateRegExp = new RegExp('[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}');

        expect(typeof utcDate).toEqual("number");
        expect(dateRegExp.test(dateString)).toBeTruthy();
        expect(typeof readingValue).toEqual("number");
    });

    it("should sort grouped readings into ascending date order", () => {
        const readings = readingsByDay(generateReadings(480));
        const sortedReadings = getSortedByTime(readings);

        const firstEntry = sortedReadings[0];
        const lastEntry = sortedReadings[sortedReadings.length - 1];

        expect(firstEntry[0] < lastEntry[0]).toBeTruthy();
    });
});
