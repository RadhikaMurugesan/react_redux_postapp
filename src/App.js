import React from 'react';
import './App.css';
import PostForm from '../src/components/postForm/PostForm';
import AllPost from '../src/components/allPost/AllPost';



function App() {
  return (
    <div className="App">
      <h3>Hello React-Redux</h3>
      <PostForm/>
      <AllPost/>
    </div>
  );
}

export default App;
