import './scss/App.min.css';
import CardGrid from './components/CardGrid';
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';


function App() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <TodoList />
          {/* <CardGrid /> */}
          {/* <ListGroup /> */}
        </div>       
      </div>
    );
}

export default App;
