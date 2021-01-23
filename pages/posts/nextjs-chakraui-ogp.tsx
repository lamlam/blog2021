import { Text, Heading } from "@chakra-ui/react";
import ArticleHeader from "../../components/ArticleHeader";
import openGraphScraper from "open-graph-scraper";
import { GetStaticProps } from "next";
import LinkCard from "../../components/LinkCard";
import { URLMetaData } from "../../interface/URLMetaData";
import { Post } from "../../interface/Post";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import prism from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

export const post: Post = {
  title: "Next.js + Chakra UI でTwitter CardのようなOGP表示を作る",
  summary: "blog等でリンク先の情報をリッチに表示できるものです。",
  id: "nextjs-chakraui-ogp",
  createdDate: "2021-01-22",
};

type Props = {};

export default function Page({}: Props) {
  SyntaxHighlighter.registerLanguage("typescript", typescript);
  return (
    <>
      <ArticleHeader
        title={post.title}
        createdDate={new Date(post.createdDate)}
      />
      <Heading size="lg" paddingBottom="10px">
        完成形
      </Heading>
      <SyntaxHighlighter language="typescript" style={prism}>{`
function foo(x) => {
  const b = 1;
  console.log(b)
}`}</SyntaxHighlighter>

      <Heading size="lg" paddingBottom="10px">
        セットアップ
      </Heading>
      <Text>
        本文ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </Text>
    </>
  );
}
