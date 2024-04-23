import React, { useEffect, useState } from "react";

export default function index() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [edit, setEdit] = useState(false);
  const [editComment, setEditComment] = useState({});

  const fetchData = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    setComment("");
    fetchData();
  };

  const handleRemove = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    fetchData();
  };

  const handleEdit = async (comment) => {
    setEdit(true);
    setEditComment(comment);
  };

  const sendUpdate = async () => {
    const { id: commentId, title } = editComment;

    const res = await fetch(`/api/comments/${commentId}`, {
      method: "PUT",
      body: JSON.stringify(title),
    });
    const data = await res.json();
    fetchData();
    setEdit(false);
  };

  return (
    <div className="col-span-8 mx-64 my-6">
      {comments.map((comment) => (
        <div className="flex justify-between items-center p-6 border border-[#1E293B] mb-4">
          <p key={comment.id}>{comment.title}</p>
          <div>
            <button
              className="text-yellow-50 px-6 py-2 border rounded-lg bg-red-600"
              onClick={() => handleRemove(comment.id)}
            >
              Reomve comment
            </button>
            <button
              onClick={() => handleEdit(comment, comment)}
              className="bg-blue-700 ml-3 text-yellow-50 px-6 py-2 border rounded-lg"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
      <span className="font-semibold">Add comment:</span>
      <input
        className="border border-[#1E293B] rounded-md px-5 py-2 mx-2"
        type="text"
        value={edit ? editComment.title : comment}
        onChange={(e) => {
          edit
            ? setEditComment({ ...editComment, title: e.target.value })
            : setComment(e.target.value);
        }}
      />
      <button
        onClick={edit ? sendUpdate : addComment}
        className="text-yellow-50 px-6 py-2 border rounded-lg  bg-green-800"
      >
        {edit ? "update" : "Add comment"}
      </button>
    </div>
  );
}
