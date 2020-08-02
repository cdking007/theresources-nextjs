import Post from "../../../models/posts";
import connectDb from "../../../database/connectDb";

connectDb();

export default async function PostById(req, res) {
  if (req.method !== "GET") {
    return res
      .status(400)
      .send({
        status: "fail",
        message: `${req.method} method is not allowed!`,
      });
  }
  try {
    const post = await Post.findOne({ _id: req.query.id });
    if (post) {
      return res.status(200).send({ status: "success", post });
    }
    return res
      .status(404)
      .send({ status: "fail", message: "no resource found!" });
  } catch (err) {
    return res
      .status(500)
      .send({ status: "fail", message: "Something is went wrong!" });
  }
}
