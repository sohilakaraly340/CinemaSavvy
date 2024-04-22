import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json({ data: comments });
  else if (req.method === "POST") {
    const comment = req.body.comment;
    comments.push({ id: Date.now(), title: comment });
    res.status(200).json("added successfully");
  }
}
