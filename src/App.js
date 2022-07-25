import React from "react";
import { Form } from "./components/Form/Form";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Form />
    </div>
  );
};

export default App;
