const request = require("supertest");
const app = require("../index");

test("GET /api funciona", async () => {
  const res = await request(app).get("/api");
  expect(res.text).toContain("DevOps");
});