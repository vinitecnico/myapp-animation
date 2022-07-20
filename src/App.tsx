import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./loading.css";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsSuccess(true), 5000);
  });

  return (
    <div className="App">
      <span className={`loader ${isSuccess ? 'success' : ''}`} />
      {/* <span className={`loader ${isSuccess ? 'fail' : ''}`} /> */}
    </div>
  );
}

export default App;
