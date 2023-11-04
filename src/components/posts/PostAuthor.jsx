import { useSelector } from "react-redux"; // Import the useSelector hook from react-redux
import { selectAllUsers } from "../../store/Controllers/userSlice"; // Import the selectAllUsers selector from the userSlice

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers); // Select all users from the Redux store

  const author = users.find((user) => user.id === userId); // Find the user with the matching userId

  return <span>by {author ? author.name : "Unknown author"}</span>; // Render the author's name or "Unknown author" if no matching user is found
};

export default PostAuthor; // Export the PostAuthor component
