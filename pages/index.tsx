import { Container, Heading, List, ListItem, Text } from "@chakra-ui/react";
import Nav from "../components/Nav";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";
import maxWidth from "../const/maxWidth";
import { Posts } from "../model/Posts";
import Link from "next/link";

function PostList({ posts }: { posts: typeof Posts }) {
  return (
    <List spacing={3}>
      {Object.keys(posts).map((key) => {
        const post = posts[key];
        return (
          <ListItem key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <Heading size="md">{post.title}</Heading>
                <Text>{post.summary}</Text>
              </a>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <ArticleHeader title="Hello World こんにちは" />
      <Container maxWidth={maxWidth} p="40px" minHeight="xl">
        <PostList posts={Posts} />
      </Container>
      <Footer />
    </>
  );
}
