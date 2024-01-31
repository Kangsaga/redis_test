// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {
    res.status(200).json({ name: "John Doe" });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
