import { createChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

createChart("usageChart", sortByTime(groupByDay(getReadings())).slice(-30));
