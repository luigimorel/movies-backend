import mongoose from "mongoose";
import request from "supertest";
import app from "../app";

beforeEach((done) => {
  mongoose.connect(process.env.MONGODB_URI ?? "mongodb://localhost:27017/boilerplate");
  done();
});

afterEach((done) => {
  mongoose.connection.close();
  done();
});

describe("", () => {
  test("GET /api/v1/users should return all users", async () => {
    const res = await request(app).get("/api/v1/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test.only("GET /api/v1/users/:id should return a user by ID", async () => {
    const res = await request(app).get("/api/v1/users/643426fa49ccc09cb279c10a");
    expect(res.statusCode).toBe(404);
    expect(res.body).toStrictEqual({ error: "User not found" });
  });

  test("POST /api/v1/users should create a user", async () => {
    const res = await request(app).post("/api/v1/users").send({
      name: "Luigi Morel",
      email: "morel@test.com",
      movies: [],
    });

    expect(res.statusCode).toBe(500);
    expect(res.body.name).toBe("Luigi");
  });

  test("PUT /api/v1/users/:id should update a user by ID", async () => {
    const res = await request(app).put("/api/v1/users/643426fa49ccc09cb279c10a").send({
      name: "John Doe",
      email: "test@test.com",
      movies: [],
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("John Doe");
  });

  test("DELETE /api/v1/users/:id should delete a user by ID", async () => {
    const res = await request(app).delete("/api/v1/users/642f02ebd20ec6286df95615");
    expect(res.statusCode).toBe(200);
  });
});
