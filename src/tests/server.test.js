const request = require("supertest");
const server = require("../server/server");

describe('Test path "/add"', () => {
  test("Test the API endpoint to be OK", async () => {
    const response = await request(server).get("/add");
    expect(response.statusCode).toBe(200);
  });
});
