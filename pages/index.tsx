import { Text, Container } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Nav />
      <Title title="Hello World こんにちは" />
      <Container maxWidth="6xl" p="0px 40px">
        <Text>本文</Text>
      </Container>
    </>
  );
}
