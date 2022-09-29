
import './Break.css';


const Break = () => {
    function handleClick(e) {

        e.preventDefault();
        console.log('click button');
  
      }
    return (
        <div>
            <h4>Add A Break</h4>
            <div className='break-info'>
                <button className='btn-break' onClick={handleClick}>10s</button>
                <button className='btn-break' onClick={handleClick}>20s</button >
                <button className='btn-break' onClick={handleClick}>30s</button>
                <button className='btn-break' onClick={handleClick}>40s</button >
                <button className='btn-break' onClick={handleClick}>50s</button >
            </div>
        </div>
    );
};

export default Break;
