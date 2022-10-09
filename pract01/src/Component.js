import {useState,setState} from 'react'
const Component = () => {
    const [item,setitem]= useState('');
    const [count,setCount]= useState(0);
  const  handleClick = ()=> {
        setCount(count + 1 );
      };
  return (
    <div>
        <p>{"My name is "+item}</p>
        <input value={item} onChange={(ano)=>setitem(ano.target.value)}/>
       <br></br>
       <button className="block" onClick={handleClick}>
          Click + {count}
        </button>
    </div>
  )
}

export default Component