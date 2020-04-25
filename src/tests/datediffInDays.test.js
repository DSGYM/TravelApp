const dateDiffInDays = require("../client/js/datediff.js");

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
today = new Date(yyyy + "-" + mm + "-" + dd);

describe("Test the date comparison function", () => {
  test("Today should be compared with today, so the result should be 0", () => {
    const result = dateDiffInDays(today);
    expect(result).toBe(0);
  });
});
