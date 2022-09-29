
import './Break.css';

const Break = () => {

    return (
        <div>
            <h4>Add A Break</h4>
            <div className='break-info'>
                <button className='btn-break' >10s</button>
                <button className='btn-break' >20s</button >
                <button className='btn-break' >30s</button>
                <button className='btn-break' >40s</button >
                <button className='btn-break' >50s</button >
            </div>
        </div>
    );
};

export default Break;
