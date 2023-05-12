import "./LightMode.css";
import moon from "../assets/icon-moon.svg";
import sun from '../assets/icon-sun.svg'
import search from "../assets/icon-search.svg";
import WhiteCard from './WhiteCard'
import { useState,useEffect } from "react";
import axios from "axios";
import dataTypes from './TypeScript'


const LightMode = () => {
  const [isDark,setIsdark]=useState(false)
  const[inputValue,setInputvalue]=useState('')
  const[submitedValue,setSubmitedValue]=useState('')
  const[mainData,setMainData]=useState<dataTypes>()
  

  
  
  console.log(isDark)
  
  useEffect(() => {
    if(submitedValue){
      const resp =async()=>{
        const response= await axios.get(`https://api.github.com/users/${submitedValue}`)
        const data=await response.data
       setMainData(data)
       console.log(data)
       
     }
     resp()
    }

    
  }, [submitedValue]);
  return (
    <div className="body" style={{backgroundColor: isDark?'#141D2F':' #f6f8ff'}}>
      <div className="main-div">
        <div className="row">
          <h2 style={{color:isDark?'white':'black'}}>devfinder</h2>
          <div className="wraper">
            <p style={{color:isDark?'white':'#697C9A'}}>{isDark?'LIGHT':'DARK'}</p>
            <img onClick={()=>{setIsdark(!isDark)}} src={isDark? sun:moon}  />
          </div>
        </div>
        <div className="input-wraper" >
          <div className="search">
            <img src={search}></img>
          </div>
          <input value={inputValue} onChange={(e)=>setInputvalue(e.target.value) }
            className={isDark? 'input1 dark':'input1'}
            type="text"
            placeholder=" Search Github Username..."
          ></input>
          <button onClick={()=>{
            if(inputValue){
              setSubmitedValue(inputValue)
              setInputvalue('')
            }
          } } className="btn1">Search</button>
        </div>
       {submitedValue? <WhiteCard isDark={isDark} mainData={mainData}/> : null}
      </div>
    </div>
  );
};

export default LightMode;

export {};
