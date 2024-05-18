import React,{useEffect, useState} from 'react'

// function Counter1() {
//     useEffect(()=>{
//         console.log('Mounting...')
//         return ()=>{
//             console.log('Unmounting...')
//         }
//     },[])
    // function Counter1() {
    //     const [count,setCount] = useState(0)
    //     useEffect(()=>{
    //         console.log('Mounting...')
    //         console.log('Updating...'+count);
    //         return ()=>{
    //             console.log('Clean up'+count);
    //         }
    //     },[count])
        function Counter1() {
            const [count,setCount] = useState(0)
            const [count2,setCount2] = useState(0)
            useEffect(()=>{
                console.log('Mounting...')
                console.log('Count 1...'+count);
                console.log('Count 2...'+count2);
            },[count])
  return (
    <div>
        <button onClick = {()=>setCount(count+1)}>Increment</button>
        <h1>Hello I am a Component:{count}</h1>

        <button onClick = {()=>setCount2(count2+1)}>Increment</button>
        <h1>Hello I am a Component 2:{count2}</h1>
    </div>
  )
}

export default Counter1