import chart from "./chart.js";
import { getSortedByTime, readingsByDay } from "./groupByDay.js";
import { generateData } from "./generateData";

chart("usageChart", getSortedByTime(readingsByDay(generateData())).slice(-30));
