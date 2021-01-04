import { HStack, Box, Image } from "@chakra-ui/react";
import Link from "next/link";
type Props = {};

export default function Header(props: Props) {
  return (
    <Box borderBottom="solid 2px" borderColor="gray.100" maxWidth="full">
      <HStack p="10px">
        <Link href="/">
          <a>
            <Image src="icon.svg" alt="icon" height="32px" />
          </a>
        </Link>
      </HStack>
    </Box>
  );
}
