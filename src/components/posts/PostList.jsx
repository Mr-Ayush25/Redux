import { useSelector, useDispatch } from "react-redux"; // Import the useSelector hook from react-redux
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../../store/Controllers/postSlice"; // Import the selectAllPosts selector from the postSlice

import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts); // Select all posts from the Redux store
  const postStatus = useSelector(getPostsStatus); // Get the state of postfetching
  const error = useSelector(getPostsError); //get the error

  // To fetch the data
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
    // console.log("called");
  }, [postStatus, dispatch]);

  // Conditional rendering of data
  let content;
  if (postStatus === "loading") {
    content = <p>Loading ..</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date)); // Sort posts by date in descending order
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content} {/* Render the list of posts */}
    </section>
  );
};

export default PostsList; // Export the PostsList component
