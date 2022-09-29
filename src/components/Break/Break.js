import React from 'react';
import './Break.css';

const Break = () => {
   
    // function breakCount(value){
    //     const {breakCount} = value;
    // }
    return (
        <div>
            <h4>Add A Break</h4>
            <div className='break-info'>
                <button >
                    <p>10<small>s</small></p>
                </button>
                <button >
                    <p>20<small>s</small></p>
                </button >
                <button className='time' >
                    <p>30<small>s</small></p>
                </button>
                <button >
                    <p>40<small>s</small></p>
                </button>
                <button >
                    <p>50<small>s</small></p>
                </button>
            </div>
        </div>
    );
};

export default Break;


// function sayHello(name) {
//     alert(`hello, ${name}`);
//   }
  
//   return (
//     <button onClick={() => sayHello('James')}>Greet</button>
//   );
  