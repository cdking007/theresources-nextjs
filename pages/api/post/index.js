import Post from "../../../models/posts";
import connectDb from "../../../database/connectDb";

connectDb();

export default function Posts(req, res) {
  switch (req.method) {
    case "GET":
      handleGetAllPosts(req, res);
      break;
    case "POST":
      handlePostCreate(req, res);
      break;
    default:
      return res.status(400).send({
        status: "fail",
        message: `${req.method} method is not allowed on this url`,
      });
  }
}

const handleGetAllPosts = async (req, res) => {
  try {
    const pageNo = Number(req.query.page);
    const limit = 30;
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((pageNo - 1) * limit);
    const postCount = await Post.find({}).countDocuments();
    const totalPage = Math.ceil(postCount / limit);
    return res.status(200).send({ status: "success", posts, totalPage });
  } catch (err) {
    return res
      .status(500)
      .send({ status: "fail", message: "something is wrong!" });
  }
};

const handlePostCreate = async (req, res) => {
  try {
    const data = req.body;
    const post = new Post({ ...data });
    await post.save();
    return res.status(201).send({ status: "success", post });
  } catch (err) {
    return res
      .status(500)
      .send({ status: "fail", message: "Something is wrong!", err });
  }
};
