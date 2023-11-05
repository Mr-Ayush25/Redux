import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "../../store/Controllers/postSlice"; // Importing the postAdded action
import { selectAllUsers } from "../../store/Controllers/userSlice"; // Importing the selectAllUsers selector

const AddPostForm = () => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const [title, setTitle] = useState(""); // Create state for the post title
  const [content, setContent] = useState(""); // Create state for the post content
  const [userId, setUserId] = useState(""); // Create state for the selected user ID
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers); // Selecting all users from the Redux store

  const onTitleChanged = (e) => setTitle(e.target.value); // Handle changes to the post title input
  const onContentChanged = (e) => setContent(e.target.value); // Handle changes to the post content input
  const onAuthorChanged = (e) => setUserId(e.target.value); // Handle changes to the selected user

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap(); //unwrap is provide redux toolkit which provides and promise which has payload or it get's rajected.

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("failed to save post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus == "idle"; // Determine if the "Save Post" button should be enabled

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
