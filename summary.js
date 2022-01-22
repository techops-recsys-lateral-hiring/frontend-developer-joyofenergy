import { sortByTime, groupByDay } from './reading.js';

export const COST_RATE = 0.138;
export const FOOTPRINTS_RATE = 0.0002532;

export const calculateConsumption = (readings) => {
    let last30DaysReadings = sortByTime(groupByDay(readings)).slice(-30);
    return Math.round(last30DaysReadings.reduce((a, reading) => {
        return a + reading.value;
    }, 0));
};

export const calculateCost = (consumption) => {
    return Math.round(consumption * COST_RATE);
}

export const calculateFootprints = (consumption) => {
    return (consumption * FOOTPRINTS_RATE).toFixed(4);
}