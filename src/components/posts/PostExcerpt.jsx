import PostAuthor from "./PostAuthor"; // Import the PostAuthor component
import TimeAgo from "./TimeAgo"; // Import the TimeAgo component
import ReactionButtons from "./ReactionButton"; // Import the ReactionButtons component

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3> {/* Display the post title */}
      <p>{post.body.substring(0, 100)}</p>{" "}
      {/* Display the first 100 characters of the post content */}
      <p className="postCredit">
        <PostAuthor userId={post.userId} />{" "}
        {/* Render the author using the PostAuthor component */}
        <TimeAgo timestamp={post.date} />{" "}
        {/* Render the timestamp using the TimeAgo component */}
      </p>
      <ReactionButtons post={post} />
      {/* Render the reaction buttons for the post using the ReactionButtons component */}
    </article>
  );
};

export default PostExcerpt;
