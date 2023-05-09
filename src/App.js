import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServiceList';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';

function App() {
  const editIsVisible = useSelector(state => state.serviceEdit.editMode);

  return (
    <div className="App">
      <Filter/>
      {editIsVisible ? <ServiceEdit /> : <ServiceAdd />}
      <ServiceList />
    </div>
  );
}

export default App;
