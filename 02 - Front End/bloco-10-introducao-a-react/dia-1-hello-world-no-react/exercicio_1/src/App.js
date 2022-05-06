import logo from './logo.svg';
import './App.css';

const tasks = ['Estudar', 'Fazer comida', 'Beber água', 'Dormir'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
function App() {
  return (
  <ul>{tasks.map((tarefa) => Task(tarefa))}</ul>
)}

export default App;