import { Heading, List, ListItem, Text } from "@chakra-ui/react";
import ArticleHeader from "../components/ArticleHeader";
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
      <ArticleHeader title="lamlam's blog" url="https://lamlam.dev/" />
      <PostList posts={Posts} />
    </>
  );
}
