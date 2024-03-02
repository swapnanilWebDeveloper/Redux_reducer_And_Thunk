import logo from './logo.svg';
import './App.css';
import Account from './Component/Account';
import Bonus from './Component/Bonus';
import { useSelector } from 'react-redux';
import Reward from './Component/Reward';

function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);

  const reward_points = useSelector(state => state.reward.reward_points);
  const reward_pf = useSelector(state => state.reward.reward_pf);

  return (
    <div className="App">
       <h2>redux-toolkit 1 is executing.....</h2>
       <h3>App Component</h3>
       <h4>Total amount is : {amount}</h4>
       <h4>Total points is : {points}</h4>

       <h4>Total reward point is : {reward_points}</h4>
       <h4>Total reward provident fund is : {reward_pf}</h4>
       <Account />
       <Bonus />
       <Reward />
    </div>
  );
}

export default App;
