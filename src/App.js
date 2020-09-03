import React from 'react';

import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className='app'>
      <h1>This is a Redux Basic Example 🚀</h1>
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
