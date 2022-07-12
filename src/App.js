import { useState } from "react";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import Nav from "./Components/Nav";

const App = () => {
  const [isLoading, setisLoading] = useState(true);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Home />
        </>
      )}
    </div>
  );
};

export default App;
