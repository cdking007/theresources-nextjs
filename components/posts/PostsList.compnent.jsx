import styles from "./PostList.module.scss";
import PostCard from "./PostCard.component";
import { List } from "semantic-ui-react";

export default function PostList({ posts }) {
  return (
    <>
      <List divided relaxed>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </List>
    </>
  );
}
