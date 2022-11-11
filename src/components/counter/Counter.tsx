import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCount, increment } from '../../store/features/counterSlice';

export function Counter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h1>Redux Toolkit: Counter</h1>
            <div>counter: {count}</div>

            <div>
                <button
                    onClick={() => {
                        dispatch(increment());
                    }}
                >
                    增加
                </button>
            </div>
        </div>
    );
}
