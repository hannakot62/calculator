const calculate = require("./calculate_function");

test("10+(3+2+(-3!-4.5)+15-5-(9+(2+1+1)+1)) to equal 0.5", () => {
  expect(calculate("10+(3+2+(-3!-4.5)+15-5-(9+(2+1+1)+1))")).toBe("0.5");
});

test("21*7*(3-2!)-((2%10-5)/2)+13 to equal 162.4", () => {
  expect(calculate("21*7*(3-2!)-((2%10-5)/2)+13")).toBe("162.4");
});

test("12*(-4) to equal -48", () => {
  expect(calculate("12*(-4)")).toBe("-48");
});

test("5^(-3) to equal 0.008", () => {
  expect(calculate("5^(-3)")).toBe("0.008");
});

test("12-2!+((2^(-5)+2)-1)+13 to equal 24.03125", () => {
  expect(calculate("12-2!+((2^(-5)+2)-1)+13")).toBe("24.03125");
});

test("9-(-2)^5+32%6 to equal 42.92", () => {
  expect(calculate("9-(-2)^5+32%6")).toBe("42.92");
});
test("18-3!!+49/7 to equal -695", () => {
  expect(calculate("18-3!!+49/7")).toBe("-695");
});

test("123-34.5*76-5!*(2^8.8) to equal -55985.626608913895", () => {
  expect(calculate("123-34.5*76-5!*(2^8.8)")).toBe("-55985.626608913895");
});

test("66-9^(18/(-9)) to equal 65.98765432098766", () => {
  expect(calculate("66-9^(18/(-9))")).toBe("65.98765432098766");
});

test("12-5*((8-3^1.1)+45)-9! to zdraste equal -363116.2581523895", () => {
  expect(calculate("12-5*((8-3^1.1)+45)-9!")).toBe("-363116.2581523895");
});

test("21211221212121+667565656556 to equal 21878786868677", () => {
  expect(calculate("21211221212121+667565656556")).toBe("21878786868677");
});

test("-(-11) to equal 11", () => {
  expect(calculate("-(-11)")).toBe("11");
});

test("120/(-6)-12+(8+9) to equal -15", () => {
  expect(calculate("120/(-6)-12+(8+9)")).toBe("-15");
});

test("(-6-3) to equal -9", () => {
  expect(calculate("(-6-3)")).toBe("-9");
});

test("2^((((5)))) to equal 32", () => {
  expect(calculate("2^((((5))))")).toBe("32");
});

test("-(-4.143559041588484)^2 to equal -17.16908153112968", () => {
  expect(calculate("-(-4.143559041588484)^2")).toBe("-17.16908153112968");
});
