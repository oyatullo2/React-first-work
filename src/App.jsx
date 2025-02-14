import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="w-full h-screen flex justify-center items-center">
      <p>Hello world</p>
    </div>
    </>
  );
}

export default App;
