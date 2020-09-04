import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <h1>This is a Redux Basic Example 🚀</h1>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
