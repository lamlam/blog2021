import Head from "next/head";
import { Heading, HStack, Container } from "@chakra-ui/react";

type Props = {
  title: string;
};

export default function Title(props: Props) {
  return (
    <Container centerContent p="40px">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <Heading>{props.title}</Heading>
    </Container>
  );
}
