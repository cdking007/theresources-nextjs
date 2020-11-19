import {
  Segment,
  Container,
  Label,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";
import axios from "axios";
import Head from "next/head";
import { baseUrl } from "../../utils/baseUrl";

export default function PostView({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} || TheResouces.Tech</title>
        <meta name="description" content={post.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:image"
          content={
            post.thumbUrl
              ? post.thumbUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtgctalka7XGqsNplPOOro4oi0KZzKisyOnw&usqp=CAU"
          }
        />
      </Head>
      <Container>
        <Segment>
          <Label ribbon color="brown">
            Resource
          </Label>
          <Segment>
            <center style={{ padding: "10px" }}>
              <h1>{post.title}</h1>
            </center>
            {post && post.thumbUrl && <Image src={post.thumbUrl} />}
            <div>
              <p style={{ padding: "10px" }}>{post.description}</p>
            </div>
            <center>
              <Button as="div" labelPosition="right">
                <Button color="blue">
                  <Icon
                    name="arrow alternate circle right"
                    style={{ margin: "10px" }}
                  />{" "}
                  Resource
                </Button>
                <Label
                  as="a"
                  href={`${post.links}`}
                  basic
                  color="blue"
                  pointing="left"
                  target="_BLANK"
                  rel="nofollow"
                >
                  Link
                </Label>
              </Button>
            </center>
          </Segment>
        </Segment>
      </Container>
    </>
  );
}

PostView.getInitialProps = async (ctx) => {
  try {
    const id = ctx.query.id;
    console.log("hello2");
    console.log(`${baseUrl}/${id}`);
    const post = await axios.get(`${baseUrl}/${id}`);

    console.log(post);
    return {
      post: post.data.post,
    };
  } catch (err) {
    return {
      post: {},
    };
  }
};
