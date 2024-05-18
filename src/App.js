import './App.css'
import Counter from './Counter';
import Header from './components/Header';
import { useState } from 'react';
function App() {
  const[count,setCount] = useState(0)
    const addCount=()=>{
      setCount(count+1)
      console.log(count)
    }

  // const arr = [1,2,3,4]
  // const[j,k,l,m] = arr
  // let count = 0;
  // function addCount(){
  //   count = count+1;
  //   console.log(count);
  // }
  // const addCount=()=>{
  //   count = count+1;
  //   console.log(count);
  // }
  const data = 'description'
  return (
    <div>
      {/* <h1 style = {{color: 'red'}}>Hello World!</h1> */}
      <Header data = {data}/>
      <h1 className = 'hello'>Hello World!</h1>
      <p>This is a sample text</p>
      <p>This is a sample {data}</p>
      <button onClick = {addCount}>Add</button>
      <Counter count={count}/>
    </div>
  );
}

export default App;