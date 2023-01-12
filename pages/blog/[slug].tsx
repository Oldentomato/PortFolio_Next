import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Container from "../../components/Container";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);

  const tags = post.tag.map((i)=>(<p className="px-2 rounded-md border-indigo-500 border-2 bg-cyan-400">{i}</p>))

  return (
    <Container>
      <div className="mt-10 prose mb-20">
        <h1 className="text-sky-700">{post.title}</h1>
        <div className="flex space-x-5 ">
          {tags}
        </div>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;

