import { useRef } from "react";
import Example from "./forwardRef/Example";

function App() {
  const inputRef = useRef();
  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
      <Example ref={inputRef} />
    </>
  );
}

export default App;
