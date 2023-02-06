import React from "react";

import { AppContext } from "./context/contextAPI";

const App = () => {
  return (
    <>
      <AppContext>
        <div className="text-3xl">Hello World</div>
      </AppContext>
    </>
  );
};

export default App;
