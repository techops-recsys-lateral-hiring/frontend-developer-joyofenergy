import { generateData } from "./generateData";

it("should generate 100 readings", () => {
  expect(generateData(100).length).toBe(100);
});

it("should generate the same reading", () => {
  const reading = 1337;
  const length = 100;
  const readings = generateData(length, reading);
  expect(readings.length).toBe(length);

  const dataAllTheSame = readings.filter(
    (item) => item.reading === reading
  );

  expect(dataAllTheSame.length).toBe(length);
});