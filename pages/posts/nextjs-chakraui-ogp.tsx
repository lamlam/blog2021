import { GetStaticProps, InferGetStaticPropsType } from "next";

import {
  Text,
  Heading,
  Container,
  Link,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

import ArticleHeader from "../../components/ArticleHeader";
import LinkCard from "../../components/LinkCard";
import openGraphScraper from "open-graph-scraper";
import { Post } from "../../interface/Post";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import langTs from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import highlighterTheme from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";
import langBash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

export const post: Post = {
  title: "Next.js + Chakra UI で Twitter Card のような OGP 表示を作る",
  summary: "ブログ等でリンク先の情報をリッチに表示できるものです。",
  id: "nextjs-chakraui-ogp",
  createdDate: "2021-01-22",
  updatedDate: "2021-01-31",
};

export default function Page({
  ogpData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  SyntaxHighlighter.registerLanguage("typescript", langTs);
  SyntaxHighlighter.registerLanguage("bash", langBash);

  return (
    <>
      <ArticleHeader
        title={post.title}
        createdDate={new Date(post.createdDate)}
      />
      <Heading size="lg" paddingBottom="10px">
        完成形
      </Heading>
      <Text paddingBottom="10px">
        以下に表示されているコンポーネントを作成します。
      </Text>
      <Container centerContent paddingBottom="10px">
        <LinkCard {...ogpData} />
      </Container>
      <Text>
        実装は最後に載せます。または
        <Link
          href="https://github.com/lamlam/nextjs-chakraui-ogp"
          color="teal.500"
          padding="0 2px"
          isExternal
        >
          github
        </Link>
        で公開しています。
      </Text>

      <Heading size="lg" paddingTop="30px" paddingBottom="10px">
        まとめ
      </Heading>
      <Text>下記の点をポイントとしてまとめます。</Text>
      <OrderedList padding="10px 0">
        <ListItem>getStaticProps で OGP のデータを取得する</ListItem>
        <ListItem>
          Chakra UI のリンクを hover したときの振る舞いは _hover で定義する
        </ListItem>
      </OrderedList>

      <Heading size="md" paddingTop="10px" paddingBottom="10px">
        1. getStaticProps で OGP のデータを取得する
      </Heading>
      <Text paddingBottom="10px">
        OGPのデータはあまり更新されるデータではないため、
        自分の用途としてビルド時に1度取得されていれば問題ありません。
        そのため、Next.js の Static Generation
        を利用してビルド時にデータ取得を行うようにしました。
      </Text>
      <Text>
        興味でCSRでも実装してみようとしましたが、今回使用した
        <Link
          href="https://www.npmjs.com/package/open-graph-scraper"
          color="teal.500"
          padding="0 2px"
          isExternal
        >
          open-graph-scraper
        </Link>
        がnode.jsのサーバサイドで動作するモジュールに依存していたので実現できずでした。
        <Link
          href="https://github.com/lamlam/nextjs-chakraui-ogp/commit/10f2a42a66e84100ffa629938b2c281df77bdb3f"
          color="teal.500"
          padding="0 2px"
          isExternal
        >
          失敗している実装のコミット
        </Link>
        。
      </Text>

      <Heading size="md" paddingTop="20px" paddingBottom="10px">
        2. Chakra UI のリンクを hover したときの振る舞いは _hover で定義する
      </Heading>

      <Text>
        Chakra UI のリンクを hover した際に underline が表示されます。
        これを無効にしたかったのですが、公式ドキュメントを探してもサンプルが見つからず、
        <Link
          href="https://github.com/chakra-ui/chakra-ui/issues/363"
          color="teal.500"
          padding="0 2px"
          isExternal
        >
          issue
        </Link>
        で見つけたので対応を書いておきます。
      </Text>

      <SyntaxHighlighter language="typescript" style={highlighterTheme}>
        {`import { Link } from "@chakra-ui/react";

// omit other code

<Link href={url} isExternal _hover={{ textDecoration: "none" }}></Link>`}
      </SyntaxHighlighter>

      <Heading size="lg" paddingTop="30px" paddingBottom="10px">
        実装メモ
      </Heading>

      <OrderedList padding="10px 0">
        <ListItem>Next.js と typescript のセットアップ</ListItem>
        <ListItem>Chakra UI の導入</ListItem>
        <ListItem>open-graph-scraperの導入</ListItem>
        <ListItem>データ取得とTwitter Card のような見た目を作成</ListItem>
      </OrderedList>

      <Heading size="md" paddingTop="20px" paddingBottom="10px">
        1. Next.js プロジェクトの作成と typescript のセットアップ
      </Heading>
      <SyntaxHighlighter language="bash" style={highlighterTheme}>
        {`$ yarn create next-app nextjs-chakraui-ogp
$ cd nextjs-chakraui-ogp
$ touch tsconfig.js
$ yarn add --dev typescript @types/react @types/node
$ yarn run dev`}
      </SyntaxHighlighter>
      <Text>
        下記の表示になれば成功です。http://localhost:3000
        で起動します。うまく起動できない場合は
        <Link
          href="https://nextjs.org/docs/getting-started"
          color="teal.500"
          padding="0 2px"
          isExternal
        >
          公式ドキュメント
        </Link>
        を参照してください。
      </Text>
      <SyntaxHighlighter style={highlighterTheme}>
        {`yarn run v1.22.10
$ next dev
We detected TypeScript in your project and created a tsconfig.json file for you.

event - compiled successfully`}
      </SyntaxHighlighter>

      <Heading size="md" paddingTop="20px" paddingBottom="10px">
        2. Chakra UI の導入
      </Heading>
      <Text>
        まず、style 関連ファイルを削除して関連ファイルを import
        している箇所を書き換えます、
        <Link
          href="https://github.com/lamlam/nextjs-chakraui-ogp/commit/53b3332ad2b731492f14e4edf7cca04342de0bc4"
          color="teal.500"
          padding="0 2px"
          isExternal
        >
          github の差分
        </Link>
        です。ChakraUI の
        <Link
          href="https://chakra-ui.com/docs/getting-started"
          color="teal.500"
          isExternal
        >
          公式ドキュメント
        </Link>
        に従いインストールします。
      </Text>
      <SyntaxHighlighter language="bash" style={highlighterTheme}>
        {`$ yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion`}
      </SyntaxHighlighter>
      <Text>_app.tsxに ChakraProvider の記述を追加します。</Text>
      <SyntaxHighlighter language="typescript" style={highlighterTheme}>
        {`import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;`}
      </SyntaxHighlighter>

      <Heading size="md" paddingTop="20px" paddingBottom="10px">
        3. open-graph-scraperの導入
      </Heading>
      <Text>
        OGPでリンク先情報を取得するためにopen-graph-scraperを利用します。
      </Text>
      <SyntaxHighlighter language="bash" style={highlighterTheme}>
        {`$ yarn add open-graph-scraper
$ yarn add -D '@types/open-graph-scraper'`}
      </SyntaxHighlighter>

      <Heading size="md" paddingTop="20px" paddingBottom="10px">
        4. データ取得と Twitter Card のような見た目を作成
      </Heading>
      <Text>
        getStaticProps で データを取得しつつ、Twitter Cardの表示を作ります。
        下記実装を /pages/ 配下のファイルに記述します。 プロジェクトの全体構成は
        <Link
          href="https://github.com/lamlam/nextjs-chakraui-ogp"
          color="teal.500"
          padding="0 2px"
          isExternal
        >
          github
        </Link>
        にあります。
      </Text>
      <SyntaxHighlighter language="typescript" style={highlighterTheme}>
        {`import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import openGraphScraper from "open-graph-scraper";
import {
  Container,
  Text,
  Box,
  Link,
  VStack,
  Image,
  Heading,
} from "@chakra-ui/react";

type OGPData = { url: string; title?: string; image?: string };
function OGP({ url, title, image }: OGPData) {
  if (!image) {
    return (
      <Link color="teal.500" href={url} isExternal>
        {url}
      </Link>
    );
  }

  return (
    <Box maxWidth={["100%", "md"]}>
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

export default function Home({
  ogpData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container centerContent>
      <Head>
        <title>OGP with Nextjs + ChakraUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>OGP with Nextjs + ChakraUI</Heading>
      <OGP {...ogpData} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = "https://natgeo.nikkeibp.co.jp/atcl/news/21/012000029/";
  const data = await openGraphScraper({
    url,
    onlyGetOpenGraphInfo: true,
  });
  if (!data.result.success) {
    return { props: { ogpData: { url } } };
  }

  return {
    props: {
      ogpData: {
        url,
        title: data.result.ogTitle,
        image: data.result.ogImage.url,
      },
    },
  };
};`}
      </SyntaxHighlighter>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = "https://natgeo.nikkeibp.co.jp/atcl/news/21/012000029/";
  const data = await openGraphScraper({
    url,
    onlyGetOpenGraphInfo: true,
  });
  if (!data.result.success) {
    return { props: { ogpData: { url } } };
  }

  return {
    props: {
      ogpData: {
        url,
        title: data.result.ogTitle,
        image: data.result.ogImage.url,
      },
    },
  };
};
