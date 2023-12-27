import React, {useReducer, useRef} from 'react';
import Button from '../components/Button.jsx';
import Panel from '../components/Panel.jsx';

function CounterPage({initialCount}) {
    /**
     * @type {React.MutableRefObject<HTMLInputElement>}
     */
    const inputRef= useRef();

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {
                    ...state,
                    count: state.count + 1
                }
            case 'decrement':
                return {
                    ...state,
                    count: state.count - 1
                }
            case "submit":
                const value = parseInt(inputRef.current.value) || 0;
                inputRef.current.value = '0';
                return {
                    count: state.count + value,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount
    })

    const increment = () => {
        dispatch({
            type:'increment'
        });
    };
    const decrement = () => {
        dispatch({
            type:'decrement'
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'submit'
        });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form>
                <label>Add a lot!</label>
                <input
                    type="number"
                    ref={inputRef}
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button onClick={handleSubmit}>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;
