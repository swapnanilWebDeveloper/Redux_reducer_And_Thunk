import logo from './logo.svg';
import './App.css';
import AddSalary from './Component/AddSalary';
import SubsSalary from './Component/SubsSalary';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function App() {
  const [netSal, setNetSal] = useState(0);

  const basic = useSelector(state => state.AddSalary.basic);
  const HRA = useSelector(state => state.AddSalary.HRA);
  const TA = useSelector(state => state.AddSalary.TA);

  const PF = useSelector(state => state.SubsSalary.PF);
  const IT = useSelector(state => state.SubsSalary.IT);
   
  useEffect(() => {
       setNetSal(basic + HRA + TA - PF - IT);
  },[basic, HRA, TA, PF, IT])
  return (
    <div className="App">
      <h2>redux-toolkit 1 is executing.....</h2>
      <h3>App Component</h3>
      <h4>Basic Salary is : {basic}</h4>
      <h4>HRA is : {HRA}</h4>
      <h4>TA is : {TA}</h4>

      <h4>Provident Fund is : {PF}</h4>
      <h4>Income Tax is : {IT}</h4>
      <h4>Net salary is : {netSal}</h4>
      <AddSalary />
      <SubsSalary />
    </div>
  );
}

export default App;
