import { useState } from 'react';

import './Ideas.scss';

const Ideas = () => {

    const [count, changeCount] = useState(0);

    return (
        <div className="ideas-page">
            <h1>Ideas</h1>

            <h1>Son: {count}</h1>
            <button onClick={() => changeCount(count - 1)}>-</button>
            <button onClick={() => changeCount(count + 1)}>+</button>
        </div>
    )
}

export default Ideas;