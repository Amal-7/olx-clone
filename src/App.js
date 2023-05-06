import './App.css';

import db from './firebase/config';
import {collection,getDocs,addDoc,doc,deleteDoc,setDoc} from 'firebase/firestore'

function App() {
  return (
    <div>
      <button onClick={async()=>{
        const prodCollection =collection(db,'products')
        const setData = await setDoc(doc(prodCollection,'tDloHgEbryrspWL19Z2X'),{
          name:'Apple',
          price:100000,
          type:'Mobile'
        })
        // const prodDltd = await deleteDoc(doc(prodCollection,'U1Gx9Xydm3kbexV4BU3Y'))
        // console.log('productDelete');
        // const prodAdd = await addDoc(prodCollection,{
        //   name:'Poco',
        //   price:25000,
        //   type:'Mobile'
        // })
        // console.log(prodAdd.id)

        // const productSnapShot = await getDocs(prodCollection)
        // const prodtList = productSnapShot.forEach((obj)=>{ 
        //   console.log(obj.data()) 
        // }) 
        // return prodtList; 
      }}>click me</button>
    </div>
  );
}

export default App;
