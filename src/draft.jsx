import React from "react";

function App() {
  const [titleColor, setColorTitle] = React.useState(undefined);
  function handleClick(color) {
    setColorTitle(color);
  }

  return (
    <div id="app">
      <h1 className={titleColor ? `highlight-${titleColor}` : undefined}>
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={() => handleClick("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleClick("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
