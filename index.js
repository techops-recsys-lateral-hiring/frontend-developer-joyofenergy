import chart from "./chart.js";
import { getSortedByTime, readingsByDay } from "./groupByDay.js";
import { generateReadings } from "./generateReadings";

chart("usageChart", getSortedByTime(readingsByDay(generateReadings())).slice(-30));
