import './style.css';
import IMAGE from '../public/react.png';
import LOGO from '../public/react.svg';
import { ClickCounter } from './ClickCounter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Counter } from './components/counter/Counter';

const App: React.FC = () => {
    const parentClick = (e: React.MouseEvent) => {
        console.log('parent', e.target, e);
    };

    const childClick = (e: React.MouseEvent) => {
        console.log('child', e.target);
    };
    return (
        <div onDoubleClick={parentClick}>
            <h1>
                Edited Hello StackBlitz webpack! - {process.env.NODE_ENV} -{' '}
                {process.env.name}
            </h1>
            <p>Start editing to see some magic happen :)</p>
            <img src={IMAGE} alt="React Logo" width="300" height="300" />
            <img
                src={LOGO}
                alt="React Logo"
                width="300"
                onDoubleClick={childClick}
            />

            <hr />
            <ClickCounter />

            <hr />
            <Counter />
        </div>
    );
};

const AppWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppWrapper;
