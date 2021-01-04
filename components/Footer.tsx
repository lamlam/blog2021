import { HStack, Text, Container } from "@chakra-ui/react";
type Props = {};

export default function Footer(props: Props) {
  return (
    <Container
      borderTop="solid 2px"
      borderColor="gray.100"
      maxWidth="full"
      centerContent
    >
      <HStack p="10px">
        <Text color="gray.400">© Naoto Saito</Text>
      </HStack>
    </Container>
  );
}
