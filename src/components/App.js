import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items"; // Ensure you're importing the items list

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={items} /> {/* Pass items as a prop */}
    </div>
  );
}

export default App;
