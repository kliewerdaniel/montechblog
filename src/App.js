import React from "react";
import MonetizedTechBlog from "./MonetizedTechBlog";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MonetizedTechBlog />
      </ErrorBoundary>
    </div>
  );
}

export default App;