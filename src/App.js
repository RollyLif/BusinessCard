import './App.css';
import Contact from './component/Contact';
import Image from './component/Image';
import Textpart from './component/Textpart';

function App() {
  return (
    <div className='card'>
      <Image />
      <Textpart />
      <Contact/>
    </div>
  );
}

export default App;
