import Redis from "ioredis";

export const redisConnect = new Redis({
  host: "110.14.90.134",
  port: 6379,
  password: "",
});
