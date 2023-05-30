import './App.css';

import db from './firebase/config';
import {collection,getDocs,addDoc,doc,deleteDoc,setDoc} from 'firebase/firestore'

function App() {
  return (
    <div>
      <button onClick={async()=>{
        const prodCollection =collection(db,'products')
       
      }}>click me</button>
    </div>
  );
}

export default App;
