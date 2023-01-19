import BlogPost from "../components/blog/blogpost"
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Container from "../components/Container";
import {useState, useEffect} from "react"
import ReactPaginate from 'react-paginate';

export const getStaticProps = async () => {
  const itemsPerPage = 0
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      itemsPerPage,
      posts,
    },
  };
};

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage ,posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        className="inline-flex -space-x-px my-7"
        previousClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        nextClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        pageClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function TagBtns(){
  return(
    <>
    </>
  );
}



export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>){

  const [viewposts, setviewposts] = useState(posts)

  useEffect(()=>{

  },viewposts)

    return(
      <Container>
        <div>
          <TagBtns />
        </div>
        <div className="mt-10 flex flex-col items-center">
          <PaginatedItems itemsPerPage={10} posts={viewposts}/>
        </div>
      </Container>

    )
}