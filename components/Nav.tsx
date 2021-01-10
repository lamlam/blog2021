import { HStack, Box, Image, Container } from "@chakra-ui/react";
import Link from "next/link";
import maxWidth from "../const/maxWidth";
type Props = {};

export default function Header(props: Props) {
  return (
    <Box borderBottom="solid 2px" borderColor="gray.100" maxWidth="full">
      <Container maxWidth={maxWidth}>
        <HStack p="10px">
          <Link href="/">
            <a>
              <Image src="/icon.svg" alt="icon" height="32px" />
            </a>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}
