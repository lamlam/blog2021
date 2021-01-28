import { Text, Heading, Container, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ArticleHeader from "../../components/ArticleHeader";
import openGraphScraper from "open-graph-scraper";
import { GetStaticProps } from "next";
import LinkCard from "../../components/LinkCard";
import { URLMetaData } from "../../interface/URLMetaData";
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
};

type Props = {
  urlDataList: { [key: string]: URLMetaData };
};

const linkURL = "https://github.com/puppeteer/puppeteer/pull/6745";

export default function Page({ urlDataList }: Props) {
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
        <LinkCard metaData={urlDataList[linkURL].metaData} url={linkURL} />
      </Container>

      <Heading size="lg" paddingTop="30px" paddingBottom="10px">
        Next.js と ChakraUI のセットアップ
      </Heading>
      <Text>Next.js プロジェクトの作成と typescript の導入をします。</Text>
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
          isExternal
        >
          公式ドキュメント <ExternalLinkIcon mx="2px" />
        </Link>
        を参照してください。
      </Text>
      <SyntaxHighlighter style={highlighterTheme}>
        {`yarn run v1.22.10
$ next dev
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db
ready - started server on http://localhost:3000
We detected TypeScript in your project and created a tsconfig.json file for you.

event - compiled successfully`}
      </SyntaxHighlighter>
      <Text>
        ChakraUI を導入します。 まず、style 関連ファイルを削除して関連ファイルを
        import している箇所を書き換えます、
        <Link
          href="https://github.com/lamlam/nextjs-chakraui-ogp/commit/53b3332ad2b731492f14e4edf7cca04342de0bc4"
          color="teal.500"
          isExternal
        >
          github の差分 <ExternalLinkIcon mx="2px" />
        </Link>{" "}
        です。ChakraUI の
        <Link
          href="https://chakra-ui.com/docs/getting-started"
          color="teal.500"
          isExternal
        >
          公式ドキュメント <ExternalLinkIcon mx="2px" />
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
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const url = linkURL;
  const ogData = await openGraphScraper({
    url,
    onlyGetOpenGraphInfo: true,
  });
  return {
    props: {
      urlDataList: {
        [url]: {
          url,
          metaData: { error: ogData.error, result: ogData.result },
        },
      },
    },
  };
};
