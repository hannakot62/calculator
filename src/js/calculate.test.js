const calculate = require("./calculate_function");

test("10+(3+2+(-3!-4.5)+15-5-(9+(2+1+1)+1)) to equal 0.5", () => {
  expect(calculate("10+(3+2+(-3!-4.5)+15-5-(9+(2+1+1)+1))")).toBe("0.5");
});

test("21*7*(3-2!)-((2%10-5)/2)+13 to equal 162.4", () => {
  expect(calculate("21*7*(3-2!)-((2%10-5)/2)+13")).toBe("162.4");
});

test("12*(-4)", () => {
  expect(calculate("12*(-4)")).toBe("-48");
});
// console.log(calculate("5^(-3)")); //ok 0.008
// console.log(calculate("12-2!+((2^(-5)+2)-1)+13")); //працуе 24.03125
// console.log(calculate("123-34.5*76-5!*(2^8.8)")); // -55985.62....
// console.log(calculate("9-(-2)^5+32%6")); //42,92
// console.log(calculate("66-9^(18/(-9))")); //65,9876.....
// console.log(calculate("18-3!!+49/7")); //-695
// console.log(calculate("12-5*((8-3^1.1)+45)-9!")); //-363116.258...
// console.log(calculate("2^((((5))))"));
// console.log(calculate("21211221212121+667565656556"));
// try {
//   console.log(calculate("0.047619047619047616+3*10^(4*10^(3))"));
// } catch (e) {
//   console.log(e);
// }
// console.log(calculate("(-6-3)"));
// console.log(calculate("-(-4.143559041588484)^2"));
// console.log(calculate("-(-11)"));
test("120/(-6)-12+(8+9)", () => {
  expect(calculate("120/(-6)-12+(8+9)")).toBe("-15");
});
