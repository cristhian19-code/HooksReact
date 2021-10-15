import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import { MainApp } from './components/useContext/MainApp';
// import { TodoApp } from './components/useReducer/TodoApp';
// import { FocusScreen } from './components/FocusScreen/FocusScreen';
// import { RealExampleRef } from './components/FocusScreen/RealExampleRef';
// import { Layout } from './components/UseLayoutEffect/Layout';
// import { MultipleHooks } from './components/Examples/MultipleHooks';
// import { FormWithCustomHook } from './components/SimpleForm/FormWithCustomHook';
// import { CounterApp } from './components/CounterApp/CounterApp';
// import { SimpleForm } from './components/SimpleForm/SimpleForm';
ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);