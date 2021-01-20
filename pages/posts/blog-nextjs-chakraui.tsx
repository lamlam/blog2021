import { Text } from "@chakra-ui/react";
import ArticleHeader from "../../components/ArticleHeader";
import openGraphScraper from "open-graph-scraper";
import { GetStaticProps } from "next";
import LinkCard from "../../components/LinkCard";
import { URLMetaData } from "../../interface/URLMetaData";

export const post = {
  title: "年末年始に Next.js + Chakra UI でブログ作った",
  summary: "年末年始に Next.js + ChakraUI でブログ作った",
  id: "blog-nextjs-chakraui",
  date: "2021-01-05",
};

type Props = {
  urlDataList: { [key: string]: URLMetaData };
};
//const linkURL = "https://github.com/trending";
const linkURL = "https://www.asahi.com/articles/ASP1K4W0LP1KUCVL005.html";

export default function Post({ urlDataList }: Props) {
  return (
    <>
      <ArticleHeader title={post.title} date={new Date(post.date)} />
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
