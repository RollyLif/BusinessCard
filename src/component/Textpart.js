import '../App.css';
import Principal from './Principal.js';
import {GrMailOption} from 'react-icons/gr';

function Textpart() {
  return (
    <div className='textpart'>
        <h1>Rolly Kadima</h1>
        <h3>frontend developer</h3>
        <p>rollylif.website</p>
        <button><GrMailOption /> Email</button>
        <Principal/>
    </div>
  );
}

export default Textpart;