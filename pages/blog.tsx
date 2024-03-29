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



const style = {
  width : "100%",
  display : "flex",
  flexWrap: "wrap" as "wrap", //typescript때문
  marginTop: "30px"
}


export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>){

  const [viewposts, setviewposts] = useState(posts)
  const viewtaglist = posts;
  // const [taglist, settaglist] = useState<string[]>([])
  useEffect(()=>{

  },[viewposts])

  const changeviewposts = (tag: any) =>{
    const newarr = posts.filter((value,index,arr)=>{
      return value['tag'].includes(tag);
    })
    setviewposts([...newarr]);
  }

  const TagBtns = (viewposts) =>{
    let resulttags = []
    let deduplicationtags = []
    let tags = []
    viewposts.forEach(e => {
      tags.push(e['tag']);
    });
    const flattags = [].concat(...tags);
    
    deduplicationtags = flattags.filter((v, i) => flattags.indexOf(v) === i);
    resulttags = deduplicationtags.map((tag, index)=>(<p key={index} onClick={()=>changeviewposts(tag)} className="tagstyle py-0.5 px-2 rounded-md bg-blue-400 mr-1 mt-1 cursor-pointer">{tag}</p>))
    return(
      <>
        {resulttags}
      </>
    );
  }

  // "text-xs inline-flex items-center font-bold leading-sm uppercase px-1 py-1 text-blue-700"
    return(
      <Container>
        <div style = {style}>
          {TagBtns(viewtaglist)}
        </div>
        <div className="mt-10 md:flex flex-col items-center">
          <PaginatedItems itemsPerPage={10} posts={viewposts}/>
        </div>
      </Container>

    )
}