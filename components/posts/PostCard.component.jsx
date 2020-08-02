import { List, Label, Segment, Grid } from "semantic-ui-react";
import Link from "next/link";
import moment from "moment";

export default function PostCard({ post }) {
  const date = moment(post.createdAt, "YYYY/MM/DD").format("YYYY/MM/DD");
  return (
    <>
      <Segment color="teal">
        <Label color="brown" ribbon>
          Resource
        </Label>
        <div style={{ display: "flex" }}>
          <Grid columns={2}>
            <List.Item>
              <List.Content
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                  margin: "20px",
                }}
              >
                <List.Header>
                  <Link href={`/post/[id]`} as={`/post/${post._id}`}>
                    <a
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginRight: "40px",
                      }}
                    >
                      {post.title}
                    </a>
                  </Link>
                </List.Header>
                <Label pointing="left" color="teal">
                  <List.Description>{date}</List.Description>
                </Label>
              </List.Content>
            </List.Item>
          </Grid>
        </div>
      </Segment>
    </>
  );
}
