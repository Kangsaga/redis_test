import Redis from "ioredis";

export const redisConnect = new Redis({
  host: "redis-11636.c322.us-east-1-2.ec2.cloud.redislabs.com",
  port: 11636,
  password: "AcThEsWbfUsKyOMVVM6Wbe0BZQBqpnkk",
});
