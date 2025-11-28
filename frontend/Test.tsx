// ========== PHẦN 1: IMPORTS ==========
import { useState } from 'react';

// ========== PHẦN 2: TYPES/INTERFACES ==========
// Định nghĩa kiểu dữ liệu cho User
type User = {
  name: string;
  age: number;
};

// ========== PHẦN 3: COMPONENT ==========
const App = () => {
  // 3.1. STATE - Quản lý dữ liệu
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User>({ name: 'John', age: 20 });

  // 3.2. HANDLER FUNCTIONS - Xử lý sự kiện
  const handleClick = () => {
    setCount(count + 1);  // Tăng count lên 1
  };

  const handleChangeName = () => {
    setUser({ ...user, name: 'Jane' });  // Đổi tên
  };

  // 3.3. RETURN JSX - Render UI
  return (
    <div>
      <h1>Hello World</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
      
      <p>User: {user.name}, Age: {user.age}</p>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};

// ========== PHẦN 4: EXPORT ==========
export default App;