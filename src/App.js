import './App.css';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './components/myRoutes';

function App() {
  return (
    <BrowserRouter>
    <MyRoutes></MyRoutes>
        <Dashboard></Dashboard>
    </BrowserRouter>
  );
}

export default App;
