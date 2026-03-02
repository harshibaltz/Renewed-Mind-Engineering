import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProfileCard from './components/ProfileCard';
import InteractivePage from './components/InteractivePage';
import Product from './components/Productlist';
import Counter from './components/Counter';

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    if (text.trim() === "") return;
    setTasks([...tasks, text]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={removeTask} />
    </div>
  );
}

export default App;



{/*
function App() {
  return (
    <div>
      <h1>my react app</h1>
      <Counter />
    </div>
  );
}

export default App;
*/
}
{/*
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/interactive" element={<InteractivePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
*/}
