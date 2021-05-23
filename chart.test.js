import { formatDateLabel } from "./chart";

describe("#chart formatDateLabel", () => {
  it("should format date label", () => {
    expect(formatDateLabel(new Date(2021, 0, 1).getTime())).toBe("01/01");
    expect(formatDateLabel(new Date(2021, 1, 1).getTime())).toBe("01/02");
    expect(formatDateLabel(new Date(2021, 5, 1).getTime())).toBe("01/06");
    expect(formatDateLabel(new Date(2021, 11, 1).getTime())).toBe("01/12");
    expect(formatDateLabel(new Date(2021, 11, 25).getTime())).toBe("25/12");
    expect(formatDateLabel(new Date(2021, 11, 31).getTime())).toBe("31/12");
  });
});
