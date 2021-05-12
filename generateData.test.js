import { generateReadings } from "./generateReadings";

it("should generate N random readings", () => {
  const n = 100;
  expect(generateReadings(n).length).toBe(n);
});

it("should generate readings with timestamps and values", () => {
  const reading = generateReadings(1)[0];

  expect(typeof reading.time).toEqual("number");
  expect(typeof reading.value).toEqual("number");
})

it("should optionally set the same value for all readings", () => {
  const value = 1337;
  const length = 100;
  const readings = generateReadings(length, value);
  expect(readings.length).toBe(length);

  const dataAllTheSame = readings.filter(
    (item) => item.value === value
  );

  expect(dataAllTheSame.length).toBe(length);
});