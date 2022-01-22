import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";
import { calculateConsumption, calculateCost, calculateFootprints } from './summary.js';

const readings = await getReadings();
renderChart(sortByTime(groupByDay(readings)).slice(-30));

const addSummary = () => {
    let totalConsumption = calculateConsumption(readings);
    let totalCost = calculateCost(totalConsumption);
    let totalFootPrints = calculateFootprints(totalConsumption);

    document.getElementById('totalCost30Days').innerHTML = totalCost;
    document.getElementById('totalConsumption30Days').innerHTML = totalConsumption;
    document.getElementById('totalFootPrints30Days').innerHTML = totalFootPrints;
};
addSummary();