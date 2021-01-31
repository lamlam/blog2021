import { VStack, Image, Box, Text, Link } from "@chakra-ui/react";

type OGPData = { url: string; title?: string; image?: string };

export default function OGP({ url, title, image }: OGPData) {
  if (!image) {
    return (
      <Link color="teal.500" href={url} isExternal>
        {url}
      </Link>
    );
  }

  return (
    <Box maxWidth="md">
      <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
        <VStack
          borderRadius="xl"
          border="1px"
          borderColor="gray.400"
          spacing={0}
          _hover={{ bg: "gray.200", textDecoration: "none" }}
        >
          <Image
            src={image}
            alt={title}
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
            <Text>{title}</Text>
            <Text color="gray.500">{url}</Text>
          </Box>
        </VStack>
      </Link>
    </Box>
  );
}
