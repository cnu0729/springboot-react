import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PizzaList from './components/PizzaList';
import PizzaForm from './components/PizzaForm';
import PizzaRouter from './components/PizzaRouter';
import PizzaResult from './components/PizzaResult';

function App() {
  return (
    <Router>
      <PizzaRouter />
      <Routes>
        <Route path='/' element={<PizzaList />} />
        {/*<Route path='/' element={<PizzaForm />} />
        <Route path='/search' element={<PizzaResult />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
