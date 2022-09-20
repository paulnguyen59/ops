import { useDispatch, useSelector } from 'react-redux';
import './App.scss'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Home/Homepage';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="app-content">
        <Outlet></Outlet>
      </div>
      <div className="app-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
