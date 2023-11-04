import { useSelector } from "react-redux"; // Import the useSelector hook from react-redux
import { selectAllPosts } from "../../store/Controllers/postSlice"; // Import the selectAllPosts selector from the postSlice
import PostAuthor from "./PostAuthor"; // Import the PostAuthor component
import TimeAgo from "./TimeAgo"; // Import the TimeAgo component
import ReactionButtons from "./ReactionButton"; // Import the ReactionButtons component

const PostsList = () => {
  const posts = useSelector(selectAllPosts); // Select all posts from the Redux store

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date)); // Sort posts by date in descending order

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3> {/* Display the post title */}
      <p>{post.content.substring(0, 100)}</p>{" "}
      {/* Display the first 100 characters of the post content */}
      <p className="postCredit">
        <PostAuthor userId={post.userId} />{" "}
        {/* Render the author using the PostAuthor component */}
        <TimeAgo timestamp={post.date} />{" "}
        {/* Render the timestamp using the TimeAgo component */}
      </p>
      <ReactionButtons post={post} />{" "}
      {/* Render the reaction buttons for the post using the ReactionButtons component */}
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts} {/* Render the list of posts */}
    </section>
  );
};

export default PostsList; // Export the PostsList component
