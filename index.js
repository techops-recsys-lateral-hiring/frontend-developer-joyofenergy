import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

window.onload = async () => {
  const readings = await getReadings();
  renderChart(sortByTime(groupByDay(readings)).slice(-30));
};
