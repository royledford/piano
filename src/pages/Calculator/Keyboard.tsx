import { useReducer } from 'react'
import { State, Actions, ActionTypes } from './keyboard-types'
import { calculatorInitState, reducer } from './keyboard-utils'
import Key from '@components/Key/Key'
import Display from '@/components/Display/Display'

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, calculatorInitState)

  const handleClearClick = () => {
    dispatch({ type: ActionTypes.Clear })
  }

  const handleKeyboardButton = (value: string) => {
    // handle numbers
    if ([...Array(10).keys()].includes(Number(value))) {
      dispatch({ type: ActionTypes.Number, payload: value })
      return
    }

    // handle operators
    handleOperator(value)
  }

  const handleOperator = (value: string) => {
    if (value === '%') {
      dispatch({ type: ActionTypes.Operator, payload: '/' })
      return
    }
    if (value === '=') {
      dispatch({ type: ActionTypes.Equals, payload: value })
      return
    }

    dispatch({ type: ActionTypes.Operator, payload: value })
  }

  return (
    <div>
      <Display />
      <div className="flex flex-row align-middle justify-center bg-white m-4 border border-black">
        <Key>A</Key>
        <Key>B</Key>
        <Key>C</Key>
        <Key>D</Key>
        <Key>E</Key>
        <Key>F</Key>
        <Key>G</Key>
      </div>
    </div>
    // <div className="main">
    //   <section className="display">
    //     <h6>{state.number !== '0' && state.number}</h6>
    //     <h3>{state.display}</h3>
    //   </section>

    //   <section className="keypad">
    //     <Key
    //       label="Clear"
    //       style={{ gridColumn: 'span 3' }}
    //       onClick={handleClearClick}
    //     />
    //     <Key label="%" highlight onClick={handleKeyboardButton} />

    //     <Key label="7" onClick={handleKeyboardButton} />
    //     <Key label="8" onClick={handleKeyboardButton} />
    //     <Key label="9" onClick={handleKeyboardButton} />
    //     <Key label="*" highlight onClick={handleKeyboardButton} />

    //     <Key label="4" onClick={handleKeyboardButton} />
    //     <Key label="5" onClick={handleKeyboardButton} />
    //     <Key label="6" onClick={handleKeyboardButton} />
    //     <Key label="-" highlight onClick={handleKeyboardButton} />

    //     <Key label="1" onClick={handleKeyboardButton} />
    //     <Key label="2" onClick={handleKeyboardButton} />
    //     <Key label="3" onClick={handleKeyboardButton} />
    //     <Key label="+" highlight onClick={handleKeyboardButton} />

    //     <Key
    //       label="0"
    //       style={{ gridColumn: 'span 3' }}
    //       onClick={handleKeyboardButton}
    //     />
    //     <Key label="=" highlight onClick={handleKeyboardButton} />
    //   </section>
    // </div>
  )
}
