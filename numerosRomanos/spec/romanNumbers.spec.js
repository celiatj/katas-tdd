import { convertRomanNumber } from "../src/romanNumber.js";

describe("numero romanos", () => {
  it("returns string for one number", () => {
    // Arranges
    const expected_value = "I";

    // Act
    const result = convertRomanNumber(1);

    // Assert
    expect(result).toBe(expected_value);
  });
  it('returns "II" for the number two', () => {
    // Arranges
    const expected_value = "II";

    // Act
    const result = convertRomanNumber(2);

    // Assert
    expect(result).toBe(expected_value);
  });
  it('returns "III" for the number three', () => {
    // Arranges
    const expected_value = "III";

    // Act
    const result = convertRomanNumber(3);

    // Assert
    expect(result).toBe(expected_value);
  });

  it('returns "V" for the number five', () => {
    // Arranges
    const expected_value = "V";

    // Act
    const result = convertRomanNumber(5);

    // Assert
    expect(result).toBe(expected_value);
  });

  it('returns "VI" for the number six', () => {
    // Arranges
    const expected_value = "VI";

    // Act
    const result = convertRomanNumber(6);

    // Assert
    expect(result).toBe(expected_value);
  });
  it('returns "VI" for the number eight', () => {
    // Arranges
    const expected_value = "VIII";

    // Act
    const result = convertRomanNumber(8);

    // Assert
    expect(result).toBe(expected_value);
  });

  it('returns "IV" for the number four', () => {
    // Arranges
    const expected_value = "IV";

    // Act
    const result = convertRomanNumber(4);

    // Assert
    expect(result).toBe(expected_value);
  });

  it('returns "X" for the number ten', () => {
    // Arranges
    const expected_value = "X";

    // Act
    const result = convertRomanNumber(10);

    // Assert
    expect(result).toBe(expected_value);
  });

  it('returns "XI" for the number eleven', () => {
    // Arranges
    const expected_value = "XI";

    // Act
    const result = convertRomanNumber(11);

    // Assert
    expect(result).toBe(expected_value);
  });
  it('returns "XIII" for the number thirteen', () => {
    // Arranges
    const expected_value = "XIII";

    // Act
    const result = convertRomanNumber(13);

    // Assert
    expect(result).toBe(expected_value);
  });
  it('returns "XV" for the number fifteen', () => {
    // Arranges
    const expected_value = "XV";

    // Act
    const result = convertRomanNumber(15);

    // Assert
    expect(result).toBe(expected_value);
  });
  it('returns "XXIV" for the number fifteen', () => {
    // Arranges
    const expected_value = "XXIV";

    // Act
    const result = convertRomanNumber(24);

    // Assert
    expect(result).toBe(expected_value);
  });
});
