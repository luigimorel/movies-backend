import mongoose from "mongoose";
import request from "supertest";
import app from "../app";

beforeEach((done) => {
  mongoose.connect(process.env.MONGODB_URI ?? "mongodb://localhost:27017/ifma_test");
  done();
});

afterEach((done) => {
  mongoose.connection.close();
  done();
});

describe("GET /api/v1/movies", () => {
  it("should return all movies", async () => {
    const res = await request(app).get("/api/v1/movies");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("POST /api/v1/movies", () => {
  it("should create a movie", async () => {
    const res = await request(app).post("/api/v1/movies").send({
      title: "Movie",
      genre: "action",
      userId: "642f0228d20ec6286df9560f",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Movie");
  });
});

describe("PUT /api/v1/movies/:id", () => {
  it("should update a movie", async () => {
    const res = await request(app).put("/api/v1/movies/642f0282d20ec6286df95611").send({
      title: "Avatar",
      genre: "action",
      userId: "642f0228d20ec6286df9560f",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Avatar");
  });
});

describe("DELETE /api/v1/movies/:id", () => {
  it("should delete a movie", async () => {
    const res = await request(app).delete("/api/v1/movies/642f0282d20ec6286df95611");
    expect(res.statusCode).toBe(200);
  });
});
