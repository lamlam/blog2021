import Head from "next/head";
import { Heading, Text, Container, HStack } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  createdDate?: Date;
  updatedDate?: Date;
};

export default function Title({ title, createdDate, updatedDate }: Props) {
  const update: Date | undefined = updatedDate || createdDate;
  return (
    <Container centerContent p="40px 0" maxWidth="100%">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
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
