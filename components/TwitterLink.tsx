import { Image } from "@chakra-ui/react";
import Link from "next/link";
type Props = {};

export default function Footer(props: Props) {
  return (
    <Link href="https://twitter.com/lamlam4r">
      <a>
        <Image alt="twitter" src="/Twitter_Logo_Blue.svg" height="32px" />
      </a>
    </Link>
  );
}
