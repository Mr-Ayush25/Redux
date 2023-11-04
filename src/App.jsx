import AddPostForm from "./components/posts/AddPostForm";
import PostsList from "./components/posts/PostList";
import "./index.css";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
