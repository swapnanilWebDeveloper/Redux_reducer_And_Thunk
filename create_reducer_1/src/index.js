import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import  AddSalaryReducer from './slices/AddSalarySlice'
import  SubsSalaryReducer from './slices/SubsSalarySlice'
import { Provider } from 'react-redux';


const store = configureStore({
     reducer : {
        AddSalary : AddSalaryReducer,
        SubsSalary : SubsSalaryReducer,
     }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
