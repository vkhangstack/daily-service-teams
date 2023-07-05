import { Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.scss';
import khangLogo from './assets/k.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const toLogin = () => {
    return navigate('/login');
  };
  const toLContact = () => {
    return navigate('/contact');
  };

  return (
    <div className='App'>
      <div className='m-auto mt-2'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://phamvankhang.name.vn' target='_blank'>
          <img src={khangLogo} className='logo khang' alt='Khang logo' />
        </a>
      </div>
      <h1 className='text-3xl font-bold underline text-sky-600'>Hello world!</h1>
      <div className='card'>
        <Button type='dashed' className='text-sky-300' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button type='text' onClick={toLContact}>
          Contact
        </Button>
        <Button type='primary' onClick={toLogin}>
          Login
        </Button>
      </div>
      <p className='text-fuchsia-400'>Build template by Pham Van Khang</p>
      <p className='text-amber-400'>{new Date().toLocaleDateString() + ''}</p>
      <p className='read-the-docs text-sky-600'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
