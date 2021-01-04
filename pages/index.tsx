import { Text, Container } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Footer from "../components/Footer";
import maxWidth from "../const/maxWidth";

export default function Home() {
  return (
    <>
      <Nav />
      <Title title="Hello World こんにちは" />
      <Container maxWidth={maxWidth} p="40px" minHeight="xl">
        <Text>
          本文ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
      </Container>
      <Footer />
    </>
  );
}
