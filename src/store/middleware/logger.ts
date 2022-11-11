import { Middleware } from 'redux';

const logger: Middleware = ({ getState }) => {
    return (next) => (action) => {
        console.log('will dispatch', action);

        next(action);

        console.log('state after dispatch', getState());
    };
};

export default logger;
