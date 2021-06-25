
import './App.css';
import { useState } from 'react';

function App() {
  const writer=['arif-azad','sadat-hossain','humayon-ahamed']
  const bookNames=['bela-furabar-age','ordhobirtto', 'himu']
  const toys=[
    {name:'doll',price:'$99.99',color:'red'},
    {name:'car',price:'$88.88', color:'white'},
    {name:'train',price:'$99.99', color:'white'}
    
]
  return (
    <div className="App">
     <div>
     <Counter></Counter>
     <FriendList></FriendList>
     <h2 style={{color:'red'}}>simple data component </h2>
    <FirstComponent></FirstComponent>
     </div>
       <br></br>
     <div>
     <h2 style={{color:'red'}}>dynamic data component </h2>
      <SecondComponent name='sumaya-islam ' age='2'></SecondComponent>
     </div>
      <br></br>
      <div>
      <h2 style={{color:'red'}}> dynamic component with multiple data</h2>
    <ThirdComponent name='setu' favColor='pink' fvrFood='ice-creem' hubby='reading-books'></ThirdComponent>
    <ThirdComponent name='SH' favColor='sky-blue' fvrFood='chaines' hubby='travelling'></ThirdComponent>
      </div>
      <br></br>
      
    
      <br></br>
      <div>
      <h2 style={{color:'red'}}>component with an array</h2>
    <LastComponent writer={writer[0]} bookNames={bookNames[0]}></LastComponent>
    <LastComponent writer={writer[1]} bookNames={bookNames[1]}></LastComponent>
    <LastComponent writer={writer[2]} bookNames={bookNames[2]}></LastComponent>
      </div>
    <br></br>
    <div>
    <h2 style={{color:'red'}}>component with an object</h2>
      <FourComponent toys={toys[0]}></FourComponent>
      <FourComponent toys={toys[1]}></FourComponent>
      <FourComponent toys={toys[2]}></FourComponent>
    </div>
    <br></br>
    
    </div>
  );
}


function FirstComponent(){

  return(
    <div style={{border:'3px solid blue',
    borderRadius:'5px',
    backgroundColor:'cyan',
    height:'200px',
    marginLeft:'15px',
    width:'200px',
    
    marginRight:'20px'}}>
        <h4> its just a simple component</h4>
     </div>
  )
}

function SecondComponent(props){
  const design={
    border: '3px solid blue',
    borderRadius:'5px',
    backgroundColor:'cyan',
    height:'200px',
    marginLeft:'15px',
    width:'200px',
    
    marginRight:'20px'
  }
  return(
    <div style={design}>
      
      <h3>name : {props.name} </h3>
      <h4>age:{props.age}</h4>
    </div>
  )
}

function ThirdComponent(props){
  const design2={
    border:'2px solid hotpink',
    borderRadius:'5px',
    backgroundColor:'pink',
    width:'700px',
    marginLeft:'350px'
  
  
    
  }
  return(
    <div style={design2}>
     
      <p>name : {props.name} <br/> food : {props.fvrFood} <br/>color : {props.favColor} <br/> Hubby : {props.hubby}</p>
    </div>
  )
}
  
function FourComponent(props){
  const design3={
    border:'3px solid gray',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    float:'left',
    marginRight:'20px',
    backgroundColor:'lightGray'
    
  }
  return(
    
    <div style={design3}>
       
        
     
        <h3>name: {props.toys.name}</h3>
        <h1>price: {props.toys.price}</h1>
        <p>color: {props.toys.color}</p>
        <button>buy now</button>

       
    </div>

  )
}

<br></br>

function LastComponent(props){
  const finalDesign={
    border:'2px solid blue',
    borderRadius:'5px',
    backgroundColor:'cyan',
    height:'150px',
    width:'700px',
    marginLeft:'350px',
    marginTop:'20px',
    

  }
  return(
    <div style={finalDesign}>
      
      <p>name : {props.writer}</p>
      <p>favourite-book : {props.bookNames}</p>

    </div>
  )
}
function Counter(){
 const[count,setCount]= useState(0);
 
 const handleIncrease=()=>{
   const newCount= count+1;
   setCount(newCount);
 }
 const handleDecrease=()=>{
  const newCount= count-1;
  setCount(newCount);
}
//  console.log('clicked me ');
//  console.log(count,setCount)
  return(
    <div>
      <h3>count : {count}</h3>
      <button onClick={handleIncrease}>increase</button>
       
      <button onClick={handleDecrease}>decrease</button>
      
    </div>
  )
}

function FriendList(){
   const [check,setCheck]=useState(0);
    const handleAdd=()=>{
      // console.log('add me');
      const newCheck=check+1;
      setCheck(newCheck)
    }
  //  console.log(add,setadd)
  const handleDelete=()=>{
    console.log('delete me');
    const newCheck=check-1;
    setCheck(newCheck)
  }
  return(
    <div>
      <h3>friendList {check}</h3>
      <button onClick={handleAdd}> Add Friend </button>
      <button onClick={handleDelete}> Delete Friend </button>
    </div>
  )
}
export default App;
