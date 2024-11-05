import './App.css';
import Square from './components/Square';

function App() {
  return (
    <div className=" w-60 h-60 my-20 mx-auto right-0 left-0">
      <div className='boxes flex'>
      <Square />
      <Square />
      <Square />
      </div>

      <div className='boxes flex'>
      <Square />
      <Square />
      <Square />
      </div>

      <div className='boxes flex'>
      <Square />
      <Square />
      <Square />
      </div>
     
    </div>
  );
}

export default App;
