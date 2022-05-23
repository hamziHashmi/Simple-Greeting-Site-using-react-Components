import React from "react";
import './index.css';

function App(){
    var ab = new Date();
    var b=ab.getHours();
    
    const clr={};
    
    // var d = new Date().toLocaleTimeString();
    const a='Hello Sir';
    
    let greeting='';
       if(b>=4 && b<=12){
        greeting="Good Morning";
        clr.color="#f3f56c";
       }
       else if(b>=13 && b<=18){
        greeting="Good AfterNoon";
        clr.color="#7ef7ef";
       }
    else{
        greeting="Good Night";
        clr.color="#f7070b";
    }
    <h1>Good Morning</h1>

    return(<>
        <div className='fullbody'>
        <h1>{a} <span style={clr}>{greeting}</span></h1>
        </div>
    </>);
};


export default App;