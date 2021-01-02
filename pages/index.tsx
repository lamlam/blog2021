import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={4}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>

      <Heading>Hello World</Heading>
    </Box>
  );
}
