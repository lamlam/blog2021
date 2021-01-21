import Head from "next/head";
import { Heading, Text, Container } from "@chakra-ui/react";

type Props = {
  title: string;
  date?: Date;
};

export default function Title({ title, date }: Props) {
  return (
    <Container centerContent p="40px 0" maxWidth="100%">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <Heading paddingBottom="10px">{title}</Heading>
      {date && (
        <Text color="gray.500">{date.toISOString().split("T").shift()}</Text>
      )}
    </Container>
  );
}
