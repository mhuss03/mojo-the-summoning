const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User } = require(".");
const { Deck } = require(".");
const { Card } = require(".");
const { Attack } = require(".");
const { db } = require("../db/config");

// define in global scope
let user;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  user = await User.create({ username: "gandalf" });
  deck = await Deck.create({ name: "test", xp: 10 });
  card = await Card.create({
    name: "test",
    mojo: 10,
    stamina: 20,
    imgUrl: "test.com",
  });
  attack = await Attack.create({ title: "test", mojoCost: 5, staminaCost: 10 });
});

// clear db after tests
afterAll(async () => await db.close());

describe("User", () => {
  it("has an id", async () => {
    expect(user).toHaveProperty("id");
  });

  it("has a username", async () => {
    expect(user.username).toBe("gandalf");
  });
});

describe("Deck", () => {
  it("has an id", async () => {
    expect(deck).toHaveProperty("id");
  });

  it("has a name", async () => {
    expect(deck.name).toBe("test");
  });

  it("has xp", async () => {
    expect(deck.xp).toBe(10);
  });
});

describe("Card", () => {
  it("has an id", async () => {
    expect(card).toHaveProperty("id");
  });

  it("has a name", async () => {
    expect(card.name).toBe("test");
  });

  it("has a mojo", async () => {
    expect(card.mojo).toBe(10);
  });

  it("has a stamina", async () => {
    expect(card.stamina).toBe(20);
  });

  it("has a imgURl", async () => {
    expect(card.imgUrl).toBe("test.com");
  });
});

describe("Attack", () => {
  it("has an id", async () => {
    expect(attack).toHaveProperty("id");
  });

  it("has a title", async () => {
    expect(attack.title).toBe("test");
  });

  it("has a mojoCost", async () => {
    expect(attack.mojoCost).toBe(5);
  });

  it("has a staminaCost", async () => {
    expect(attack.staminaCost).toBe(10);
  });
});
