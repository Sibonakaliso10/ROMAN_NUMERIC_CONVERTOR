// 🔗 DOM element references
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

// 🧠 Event listener for the "Convert" button
convertBtn.addEventListener("click", () => {
  const value = parseInt(numberInput.value); // Convert input to integer

  // 🚫 Input validation: empty or non-numeric
  if (!numberInput.value || isNaN(value)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  // 🚫 Input too small
  if (value < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  // 🚫 Input too large
  if (value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  // ✅ Valid input: convert and display result
  output.textContent = convertToRoman(value);
});

// 🔁 Recursive function to convert number to Roman numeral
function convertToRoman(num) {
  // 🧾 Mapping of decimal values to Roman symbols
  const romanMap = [
    { val: 1000, sym: "M" },
    { val: 900, sym: "CM" },
    { val: 500, sym: "D" },
    { val: 400, sym: "CD" },
    { val: 100, sym: "C" },
    { val: 90, sym: "XC" },
    { val: 50, sym: "L" },
    { val: 40, sym: "XL" },
    { val: 10, sym: "X" },
    { val: 9, sym: "IX" },
    { val: 5, sym: "V" },
    { val: 4, sym: "IV" },
    { val: 1, sym: "I" }
  ];

  // 🔁 Loop through the map and subtract values recursively
  for (let { val, sym } of romanMap) {
    if (num >= val) {
      return sym + convertToRoman(num - val); // Append symbol and recurse
    }
  }

  return ""; // Base case: return empty string when num is 0
}
