import { generateData } from "./generateData";
import { getSortedByTime, readingsByDay } from "./groupByDay";

describe("group data by day", () => {
    it("should group readings into 3 days", () => {
        const now = new Date();
        const hour = now.getHours();

        const readings = readingsByDay(generateData(hour + 48, 50));
        const keys = Object.keys(readings);
        expect(keys.length).toBe(3);
    });

    it("should sort group readings into date order", () => {
        const readings = readingsByDay(generateData(480, 50));
        const tupleWithUTCTime = getSortedByTime(readings);
        expect(tupleWithUTCTime[0].length).toBe(3);
    });
});
