import { Text } from "@chakra-ui/react";
import ArticleHeader from "../../components/ArticleHeader";
import openGraphScraper from "open-graph-scraper";
import { GetStaticProps } from "next";
import LinkCard from "../../components/LinkCard";
import { URLMetaData } from "../../interface/URLMetaData";
import { Post } from "../../interface/Post";

export const post: Post = {
  title: "年末年始に Next.js + Chakra UI でブログ作った",
  summary: "年末年始に Next.js + ChakraUI でブログ作った",
  id: "blog-nextjs-chakraui",
  createdDate: "2021-01-05",
  updatedDate: "2021-01-21",
};

type Props = {
  urlDataList: { [key: string]: URLMetaData };
};
//const linkURL = "https://github.com/trending";
//const linkURL = "https://www.asahi.com/articles/ASP1K4W0LP1KUCVL005.html";
const linkURL = "https://github.com/puppeteer/puppeteer/pull/6745";

export default function PostPage({ urlDataList }: Props) {
  return (
    <>
      <ArticleHeader
        title={post.title}
        createdDate={new Date(post.createdDate)}
        updatedDate={new Date(post.updatedDate)}
      />
      <Text>
        本文ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </Text>
      <LinkCard metaData={urlDataList[linkURL].metaData} url={linkURL} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  //const urlList: string[] = ["https://github.com/trending"];
  //const url = "https://github.com/trending";
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
  /*
  try {
    let urlDataList: { [key: string]: URLData };
    await Promise.all(
      urlList.map(
        async (url): Promise<OGData> => {
          const ogData = await openGraphScraper({
            url,
            onlyGetOpenGraphInfo: true,
          });
          urlDataList[url] = { url, ogData };
          return ogData;
        }
      )
    );
    console.log(urlDataList);
    return { props: { urlDataList } };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
  */
};
