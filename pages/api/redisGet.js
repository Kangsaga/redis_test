import { redisConnect } from "../../utils/redis.js";

export default async function handler(req, res) {
  let data;
  console.log("들어왔니?");
  switch (req.method) {
    case "GET":
      data = await redisConnect.get(req.query.key);
      break;
    case "POST":
      await redisConnect.del([req.body.key]);
      //redis에 데이터를 담을때 유효시간을 짧게 설정해 주는것이 좋습니다.
      data = await redisConnect.set(req.body.key, req.body.value, "EX", 18);
      break;
  }
  res.status(200).json(data);
}
