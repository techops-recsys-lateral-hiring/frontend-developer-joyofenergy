import { calculateConsumption, calculateCost, calculateFootprints, FOOTPRINTS_RATE, COST_RATE } from './summary.js';


describe('Consumption', () => {
    const readings = [
            {
                time: new Date(2021, 12, 17, 10, 24).getTime(),
                value: 50
            },
            {
              time: new Date(2021, 12, 16, 9, 24).getTime(),
              value: 40,
            },
            {
              time: new Date(2021, 12, 15, 10, 34).getTime(),
              value: 30,
            },
            {
              time: new Date(2021, 12, 14, 10, 34).getTime(),
              value: 20,
            },
            {
              time: new Date(2021, 12, 13, 10, 34).getTime(),
              value: 10,
            },
          ];
    let totalConsumption;
    it('Should calculate total consumption for 30 days', () => {
        totalConsumption = calculateConsumption(readings);
        expect(totalConsumption).toEqual(150);
    });

    it('Should calculate total cost for 30 days', () => {
        let expectedResult = Math.round(150 * COST_RATE);
        let totalCost = calculateCost(totalConsumption);
        expect(totalCost).toEqual(expectedResult);
    });

    it('Should calculate total consumption for 30 days', () => {
        let expectedResult = (150 * FOOTPRINTS_RATE).toFixed(4);
        let totalFootprints = calculateFootprints(totalConsumption);
        expect(totalFootprints).toEqual(expectedResult);
    });
});