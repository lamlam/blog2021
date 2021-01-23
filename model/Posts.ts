import { Post } from "../interface/Post";

import { post as nextjsChakraui } from "../pages/posts/blog-nextjs-chakraui";
import { post as nextjsChakrauiOGP } from "../pages/posts/nextjs-chakraui-ogp";

export const Posts: { [key: string]: Post } = {
  [nextjsChakrauiOGP.id]: nextjsChakrauiOGP,
  [nextjsChakraui.id]: nextjsChakraui,
  test: {
    title: "tests",
    summary: "yattaze test is test is test is jjjjjjjjl where",
    id: "blogii",
    createdDate: "2021-01-06",
  },
};
