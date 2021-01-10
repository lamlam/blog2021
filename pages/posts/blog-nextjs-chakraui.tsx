import { Text, Container } from "@chakra-ui/react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ArticleHeader from "../../components/ArticleHeader";
import maxWidth from "../../const/maxWidth";
import { posts } from "../../const/posts";

const post = posts["blog-nextjs-chakraui"];

type Props = {};
export default function Post(props: Props) {
  return (
    <>
      <Nav />
      <ArticleHeader title={post.title} date={new Date(post.date)} />
      <Container maxWidth={maxWidth} p="40px" minHeight="xl">
        <Text>
          本文ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
      </Container>
      <Footer />
    </>
  );
}
