import { SuccessResult } from "open-graph-scraper";
import { VStack, Image, Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { URLMetaData, MetaData } from "../interface/URLMetaData";
type Props = URLMetaData;

export default function LinkCard({ metaData, url }: Props) {
  let og: SuccessResult["result"];
  if (metaData.error === false) {
    og = metaData.result;
  }
  return (
    <Box maxWidth="md">
      {metaData.error ? (
        <Link color="teal.500" href={url} isExternal>
          {url}
        </Link>
      ) : (
        <Link href={og.ogUrl} isExternal>
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
        </Link>
      )}
    </Box>
  );
}
