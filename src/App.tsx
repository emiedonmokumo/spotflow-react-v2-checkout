import { useState } from "react";
import { SpotflowButton } from "@library/main";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <SpotflowButton
        text="KDkshdksd"
        email="olukayodeogunnowo@hotmail.com"
        encryptionKey="g4ryTjP3VAGwl8Bk9r0foFtgoY64Ba4gZQ701OAAbB4="
        merchantKey="sk_test_d96889a82e9743bfb274c5f684ad5b69"
        planId="3c902af2-6bec-4cc1-a2a3-f74fc35e88d4"
        amount={0}
      />
    </>
  );
}

export default App;
