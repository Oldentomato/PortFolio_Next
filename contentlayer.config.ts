import { defineDocumentType, makeSource } from "contentlayer/source-files";
import PrettyCode from "rehype-pretty-code"
import rehypeCodeTitles from "rehype-code-titles"
import remarkGfm from "remark-gfm"
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'



export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    tag: { type: 'json', required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split("/");
        return parts[parts.length - 1];
      },
    },
    url: {
      type: "string",
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split("/");
        const slug = parts[parts.length - 1];
        return `/blog/${slug}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: { 
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      PrettyCode,
      rehypeCodeTitles,
      rehypeKatex
  ] }
});

