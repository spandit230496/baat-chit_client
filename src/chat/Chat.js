import React from 'react';
import style from '../style/style.css'
import message from '../service/message';
import { useState } from 'react';

function Chat(){
   
        const [name ,setName]=useState('');
        
        function SendMSG(e){
          e.preventDefault();
        
          const obj  = {
            name: name     
          } 

          message.sendMsg(name)
          .then(console.log(obj))
          .catch(e=>console.log(e))
        
        }
    return (
    <>
    <div className='chat'>
   <div className='header'>
    Hello
</div>

<div className='msg'>  
</div>


<div className='send'>
 <input type="text" placeholder='message' className='textr'  onChange={(e)=>setName(e.target.value)} value={name}>
 </input>
 <button className='sendbtn' onClick={SendMSG}>send</button>
</div>

    </div>
    
    
    
    </>)
}

export default Chat