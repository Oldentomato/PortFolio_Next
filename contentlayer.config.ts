import { defineDocumentType, makeSource } from "contentlayer/source-files";
import PrettyCode from "rehype-pretty-code"
import rehypeCodeTitles from "rehype-code-titles"
import remarkGfm from "remark-gfm"


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
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: { 
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      PrettyCode,
      rehypeCodeTitles
  ] }
});

