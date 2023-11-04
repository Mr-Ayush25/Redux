import { useDispatch } from "react-redux"; // Import the useDispatch hook from react-redux
import { reactionAdded } from "../../store/Controllers/postSlice"; // Import the reactionAdded action from the postSlice

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  // Create an array of reaction buttons by mapping over the reactionEmoji object
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={
          () => dispatch(reactionAdded({ postId: post.id, reaction: name })) // Dispatch the reactionAdded action with the postId and reaction name
        }
      >
        {emoji} {post.reactions[name]}{" "}
        {/* Display the emoji and the count for each reaction */}
      </button>
    );
  });

  return <div>{reactionButtons}</div>; // Render the reaction buttons
};

export default ReactionButtons; // Export the ReactionButtons component
