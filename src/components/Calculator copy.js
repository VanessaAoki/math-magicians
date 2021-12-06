import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const onClickHandler = (e) => {
    setState((state) => calculate(state, e.target.innerHTML));
  };

  const firstRow = ['AC', '+/-', '%', '÷'];
  const secondRow = ['7', '8', '9', 'x'];
  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];
  const fifthRow = ['0', '.', '='];
  const { total, next, operation } = state;

  const first = firstRow.map(
    (elem, index) => (
      <button
        key={`first-${index + 0}`}
        className={`first-${index}`}
        type="button"
        onClick={onClickHandler}
      >
        {elem}
      </button>
    ),
  );

  const second = secondRow.map(
    (elem, index) => (
      <button
        key={`second-${index + 0}`}
        className={`second-${index}`}
        type="button"
        onClick={onClickHandler}
      >
        {elem}
      </button>
    ),
  );

  const third = thirdRow.map(
    (elem, index) => (
      <button
        key={`third-${index + 0}`}
        className={`third-${index}`}
        type="button"
        onClick={onClickHandler}
      >
        {elem}
      </button>
    ),
  );

  const fourth = fourthRow.map(
    (elem, index) => (
      <button
        key={`fourth-${index + 0}`}
        className={`fourth-${index}`}
        type="button"
        onClick={onClickHandler}
      >
        {elem}
      </button>
    ),
  );

  const fifth = fifthRow.map(
    (elem, index) => (
      <button
        key={`fifth-${index + 0}`}
        className={`fifth-${index}`}
        type="button"
        onClick={onClickHandler}
      >
        {elem}
      </button>
    ),
  );
  return (
    <section className="calculator-grid">
      <div className="display-result">
        <p>
          { next || total || '0' }
        </p>
        <p>
          { next == null ? operation : '' }
        </p>
      </div>
      <div className="first">{ first }</div>
      <div className="second">{ second }</div>
      <div className="third">{ third }</div>
      <div className="fourth">{ fourth }</div>
      <div className="fifth">{ fifth }</div>
    </section>
  );
};

export default Calculator;
