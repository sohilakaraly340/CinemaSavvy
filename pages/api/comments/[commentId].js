import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = req.body;
  console.log(req.body);
  const index = comments.findIndex((com) => com.id === +commentId);

  if (req.method === "DELETE") {
    comments.splice(index, 1);
  } else if (req.method === "PUT") {
    console.log(comments[index].title, comment);
    comments[index].title = comment;
  }
  res.status(200).json({ data: comments });
}
