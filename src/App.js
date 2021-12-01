/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import QuotePage from './pages/QuotePage';
import CalculatorPage from './pages/CalculatorPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="body-container">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/quote" component={QuotePage} />
            <Route path="/calculator" component={CalculatorPage} />
            <Route path="/home" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
