import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect - Chạy SAU KHI component render
  useEffect(() => {
    console.log('Component đã render!');
    console.log('Count hiện tại:', count);
  }, [count]);  // ← Chạy lại MỖI KHI count thay đổi

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default App;