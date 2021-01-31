import Head from "next/head";
import { Heading, Text, Container, HStack } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  createdDate?: Date;
  updatedDate?: Date;
  url?: string;
};

export default function Title({ title, createdDate, updatedDate, url }: Props) {
  const update: Date | undefined = updatedDate || createdDate;
  return (
    <Container centerContent p="40px" maxWidth="100%">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />

        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content={title} />
        {url && (
          <>
            <meta property="og:url" content={url} />
            <meta
              property="og:image:secure_url"
              content="https://secure.example.com/ogp.jpg"
            />
          </>
        )}
      </Head>
      <Heading paddingBottom="10px">{title}</Heading>
      {update && (
        <HStack>
          <RepeatClockIcon color="gray.500" />
          <Text color="gray.500">
            {update.toISOString().split("T").shift()}
          </Text>
        </HStack>
      )}
    </Container>
  );
}
