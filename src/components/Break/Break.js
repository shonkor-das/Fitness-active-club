
import './Break.css';

const Break = ({breakTime, handleBreakBtn}) => {

        const {} = breakTime;
    return (
        <div>
            <h4>Add A Break</h4>
            <div className='break-info'>
                <button className='btn-break' onClick={() =>handleBreakBtn(breakTime)}>10s</button>
                {/* <button className='btn-break' >20s</button >
                <button className='btn-break' >30s</button>
                <button className='btn-break' >40s</button >
                <button className='btn-break' >50s</button > */}
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
  