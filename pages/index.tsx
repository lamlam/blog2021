import { Text, Container } from "@chakra-ui/react";
import Nav from "../components/Nav";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";
import maxWidth from "../const/maxWidth";

export default function Home() {
  return (
    <>
      <Nav />
      <ArticleHeader title="Hello World こんにちは" />
      <Container maxWidth={maxWidth} p="40px" minHeight="xl">
        <Text>
          本文ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
      </Container>
      <Footer />
    </>
  );
}
