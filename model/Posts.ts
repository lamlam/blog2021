import { Post } from "../interface/Post";

import { post as nextjsChakraui } from "../pages/posts/blog-nextjs-chakraui";

export const Posts: { [key: string]: Post } = {
  [nextjsChakraui.id]: nextjsChakraui,
  test: {
    title: "tests",
    summary: "yattaze test is test is test is jjjjjjjjl where",
    id: "blogii",
    date: "2021-01-06",
  },
};
