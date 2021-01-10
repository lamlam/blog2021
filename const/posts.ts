export type Post = {
  title: string;
  summary: string;
  id: string;
  date?: string;
};

export const posts: { [key: string]: Post } = {
  "blog-nextjs-chakraui": {
    title: "年末年始に Next.js + Chakra UI でブログ作った",
    summary: "年末年始に Next.js + ChakraUI でブログ作った",
    id: "blog-nextjs-chakraui",
    date: "2021-01-05",
  },
  test: {
    title: "tests",
    summary: "yattaze test is test is test is jjjjjjjjl where",
    id: "blogii",
    date: "2021-01-06",
  },
};
