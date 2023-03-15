import "./styles/styles.scss"
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    case 'Reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='body'>
      <div className="container">
        <h1 className="count">{state}</h1>
        <div className="buttons">
          <button id="inc" className="btn" onClick={() => dispatch({ type: "Increment" })}>Increment</button>
          <button id="dec" className="btn" onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
          <button id="reset" className="btn" onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
