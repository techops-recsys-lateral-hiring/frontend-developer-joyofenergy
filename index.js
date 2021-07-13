import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

const readings = await getReadings();
renderChart(sortByTime(groupByDay(readings)).slice(-30));
