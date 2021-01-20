import Head from "next/head";
import { Heading, Text, Container } from "@chakra-ui/react";

type Props = {
  title: string;
  date?: Date;
};

export default function Title(props: Props) {
  return (
    <Container centerContent p="40px 0" maxWidth="100%">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <Heading>{props.title}</Heading>
      {props.date ? (
        <Text color="gray.500">
          {props.date.toISOString().split("T").shift()}
        </Text>
      ) : null}
    </Container>
  );
}
