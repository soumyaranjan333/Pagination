import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./Pagination";
import Spinners from "./Spinners";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerpage, setPostsPerpage] = useState(10);
  const [addPost, setAddPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setposts(res.data);
      setLoading(false);
      // setCurrentPage(currentPage + 1);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  useEffect((item) => {
    item + 1;
  });

  // useEffect(() => {
  //   setAddPost([...addPost,...currentPost])
  // }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const fetchMoreData=()=>{
  //   setCurrentPage(currentPage+1)
  //     fetchPosts();
  // }
  console.log(currentPost);
  if (loading) {
    return <Spinners />;
  }
  return (
    <div className="App">
      <h1>Pagination</h1>
      <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
        {/* <InfiniteScroll
          dataLength={posts.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          // endMessage={
          //   <p style={{ textAlign: 'center' }}>
          //     <b>Yay! You have seen it all</b>
          //   </p>
          // }
          scrollableTarget="scrollableDiv"
        > */}
        {currentPost &&
          currentPost.map((post) => <p key={post.id}>{post.title}</p>)}
        {/* </InfiniteScroll> */}
      </div>
      <Pagination
        postsPerPage={postsPerpage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
