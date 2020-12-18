import Head from "next/head";
import PostList from "../components/posts/PostsList.compnent";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Pagination } from "semantic-ui-react";
import { useRouter } from "next/router";
import { baseUrl } from "../utils/baseUrl";

const Home = ({ posts, totalPages, page }) => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>
          TheResources || Technical usefull resources for programmers{" "}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <h1>No Posts Found</h1>
        )}

        <div style={{ textAlign: "center" }}>
          <Pagination
            defaultActivePage={1}
            pointing
            secondary
            totalPages={totalPages}
            activePage={page}
            onPageChange={(event, data) => {
              data.activePage === 1
                ? router.push("/")
                : router.push(`/?page=${data.activePage}`);
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const page = ctx.query.page ? ctx.query.page : 1;
    const posts = await axios.get(`${baseUrl}/api/post?page=${page}`);
    return {
      props: {
        posts: posts.data.posts,
        totalPages: posts.data.totalPage,
        page: page,
      }, // will be passed to the page component as props
    };
  } catch (erorr) {
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Home;
