import { useState } from 'react';

export const ClickCounter: React.FC = () => {
    const [count, setCount] = useState(0);
    const num = 1;
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>
                Count {count}
            </button>
        </div>
    );
};
