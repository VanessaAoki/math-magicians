/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
import React from 'react';

class Calculator extends React.Component {
  render() {
    const firstRow = ['AC', '+/-', '%', '+'];
    const secondRow = ['7', '8', '9', 'x'];
    const thirdRow = ['4', '5', '6', '-'];
    const fourthRow = ['1', '2', '3', '+'];
    const fifthRow = ['0', '.', '='];

    const first = firstRow.map(
      (elem, index) => (
        <button key={`first-${index}`} className={`first-${index}`} type="button">
          {elem}
        </button>
      ),
    );

    const second = secondRow.map(
      (elem, index) => (
        <button key={`second-${index}`} className={`second-${index}`} type="button">
          {elem}
        </button>
      ),
    );

    const third = thirdRow.map(
      (elem, index) => (
        <button key={`third-${index}`} className={`third-${index}`} type="button">
          {elem}
        </button>
      ),
    );

    const fourth = fourthRow.map(
      (elem, index) => (
        <button key={`fourth-${index}`} className={`fourth-${index}`} type="button">
          {elem}
        </button>
      ),
    );

    const fifth = fifthRow.map(
      (elem, index) => (
        <button key={`fifth-${index}`} className={`fifth-${index}`} type="button">
          {elem}
        </button>
      ),
    );
    return (
      <section className="calculator-grid">
        <div className="display-result"><p>0</p></div>
        <div className="first">{ first }</div>
        <div className="second">{ second }</div>
        <div className="third">{ third }</div>
        <div className="fourth">{ fourth }</div>
        <div className="fifth">{ fifth }</div>
      </section>
    );
  }
}

export default Calculator;
