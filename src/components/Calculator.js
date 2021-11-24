/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.setState((state) => calculate(state, e.target.innerHTML));
  }

  render() {
    const firstRow = ['AC', '+/-', '%', '÷'];
    const secondRow = ['7', '8', '9', 'x'];
    const thirdRow = ['4', '5', '6', '-'];
    const fourthRow = ['1', '2', '3', '+'];
    const fifthRow = ['0', '.', '='];
    const { total, next, operation } = this.state;

    const first = firstRow.map(
      (elem, index) => (
        <button
          key={`first-${index}`}
          className={`first-${index}`}
          type="button"
          onClick={this.onClickHandler}
        >
          {elem}
        </button>
      ),
    );

    const second = secondRow.map(
      (elem, index) => (
        <button
          key={`second-${index}`}
          className={`second-${index}`}
          type="button"
          onClick={this.onClickHandler}
        >
          {elem}
        </button>
      ),
    );

    const third = thirdRow.map(
      (elem, index) => (
        <button
          key={`third-${index}`}
          className={`third-${index}`}
          type="button"
          onClick={this.onClickHandler}
        >
          {elem}
        </button>
      ),
    );

    const fourth = fourthRow.map(
      (elem, index) => (
        <button
          key={`fourth-${index}`}
          className={`fourth-${index}`}
          type="button"
          onClick={this.onClickHandler}
        >
          {elem}
        </button>
      ),
    );

    const fifth = fifthRow.map(
      (elem, index) => (
        <button
          key={`fifth-${index}`}
          className={`fifth-${index}`}
          type="button"
          onClick={this.onClickHandler}
        >
          {elem}
        </button>
      ),
    );
    return (
      <section className="calculator-grid">
        <div className="display-result">
          <p id="result">
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
  }
}

export default Calculator;
