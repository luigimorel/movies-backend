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

describe("movie tests ", () => {
  test("GET /api/v1/movies should return all movies", async () => {
    const res = await request(app).get("/api/v1/movies");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("POST /api/v1/movies should create a movie", async () => {
    const res = await request(app).post("/api/v1/movies").send({
      title: "Movie",
      genre: "action",
      userId: "642f0228d20ec6286df9560f",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Movie");
  });

  test("GET /api/v1/movies/:id should fetch a movie by ID", async () => {
    const res = await request(app).put("/api/v1/movies/643aa26f7373d2a914334519").send({
      title: "Avatar",
      genre: "action",
      userId: "642f0228d20ec6286df9560f",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Avatar");
  });

  test("PUT /api/v1/movies/:id should update a movie by ID", async () => {
    const res = await request(app).put("/api/v1/movies/643aa26f7373d2a914334519").send({
      title: "Avatar",
      genre: "action",
      userId: "642f0228d20ec6286df9560f",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Avatar");
  });

  test("DELETE /api/v1/movies/:id should delete a movie by ID ", async () => {
    const res = await request(app).delete("/api/v1/movies/643aa2797373d2a91433451b");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });
});
