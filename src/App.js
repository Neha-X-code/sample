// import './App.css'
// import Counter from './Counter';
// import Employee from './Employee';
// import Header from './components/Header';
// import { useState } from 'react';
// function App() {
//   const[count,setCount] = useState(0)
//     const addCount=()=>{
//       setCount(count+1)
//       console.log(count)
//     }

//   const arr = [1,2,3,4]
//   const[j,k,l,m] = arr
//   let count = 0;
//   function addCount(){
//     count = count+1;
//     console.log(count);
//   }
//   const addCount=()=>{
//     count = count+1;
//     console.log(count);
//   }
//   const data = 'description'

//   let obj = {
//     title:'1st Counter',
//     count,
//     place:'hello'
//   }

//   let emp = [{name:'NK',age:40},
//   {name:'Steve',age:21},
//   {name:'Musk',age:18},
//   ]

//   return (
//     <div>
//       <h1 style = {{color: 'red'}}>Hello World!</h1>
//       <Header data = {data}/>
//       <h1 className = 'hello'>Hello World!</h1>
//       <p>This is a sample text</p>
//       <p>This is a sample {data}</p>
//       <button onClick = {addCount}>Add</button>
//       <Counter title ='1st Counter' count={count}/>
//       <Counter {...obj}/>
//       <Counter title ='2nd Counter' count={count}/>
//       {
//         emp.map((obj,index)=>{
//             return (
//               <Employee key = {index}name = {obj.name} age = {obj.age}/>
//               <Employee key = {index} {...obj}/>
//             )
//         })
//         emp.map((obj,index))=>
//           (
//             <Employee key = {index} {...obj}/>
//           )
//       }
//     </div>
//   );
// }

// export default App;
//Mounting
//Updating
//unmount

import './App.css'
import Counter1 from "./Counter1";
import {useState} from 'react'

function App(){
  const [state,setState] = useState(false)
  return(
    <div className="App">
    <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
    {/* {state ? <Counter1/>:null} */}
    {state && <Counter1/>}
    </div>
  );
}
export default App;