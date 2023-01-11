import Link from 'next/link'

type propstype = {
    date : string,
    title : string,
    des : string,
    slug : string
}

const BlogPost = ({date, title, des, slug}:propstype) => {
    return (
    <Link className="posts w-full my-7 hover:-translate-x-1.5" href={`/blog/${slug}`} passHref>
          <div className="font-medium text-xs text-gray-400">{date}</div>
          <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
          <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
    </Link>
    );
  };
  
  export default BlogPost;