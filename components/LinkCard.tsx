import { ErrorResult, SuccessResult } from "open-graph-scraper";
import { VStack, Image, Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export type OGData = Omit<SuccessResult, "response"> | ErrorResult;

type Props = {
  ogData: OGData;
  url: string;
};

export default function LinkCard({ ogData, url }: Props) {
  let og: SuccessResult["result"];
  if (ogData.error === false) {
    og = ogData.result;
  }
  return (
    <Box maxWidth="md">
      {ogData.error ? (
        <NextLink href={url}>
          <Link target="_blank">url</Link>
        </NextLink>
      ) : (
        <NextLink href={og.ogUrl}>
          <a target="_blank">
            <VStack
              borderRadius="xl"
              border="1px"
              borderColor="gray.400"
              spacing={0}
            >
              <Image
                src={og.ogImage.url}
                alt={og.ogTitle}
                width="100%"
                maxHeight="2xs"
                borderTopRadius="xl"
                objectFit="cover"
              />
              <Box
                borderBottomRadius="xl"
                borderTop="1px"
                borderColor="gray.400"
                padding="3"
                width="100%"
              >
                <Text>{og.ogTitle}</Text>
                <Text color="gray.500">{og.ogUrl}</Text>
              </Box>
            </VStack>
          </a>
        </NextLink>
      )}
    </Box>
  );
}
