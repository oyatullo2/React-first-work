import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 w-full max-w-[500px] mx-auto items-center border-[2px] border-gray-100 p-[10px] h-screen justify-center max-h-fit shadow-md">
          <input
            type="text"
            className="border-[2px] border-blue-100 w-full max-w-[400px] mx-auto py-[8px] outline-none font-[600] px-[10px] text-[18px] text-blue-400 rounded-md"
          />
          <input
            type="email"
            className="border-[2px] border-blue-100 w-full max-w-[400px] mx-auto py-[8px] outline-none font-[600] px-[10px] text-[18px] text-blue-400 rounded-md"
          />
          <input
            type="password"
            className="border-[2px] border-blue-100 w-full max-w-[400px] mx-auto py-[8px] outline-none font-[600] px-[10px] text-[18px] text-blue-400 rounded-md"
          />
          <button className="mx-auto w-full border-[2px] text-center max-w-[400px] mt-[10px] py-[8px] font-[600] text-blue-400 hover:rounded-md transition-all duration-500 ease-in-out border-blue-100 hover:shadow-md outline-none">
            Sumbit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
