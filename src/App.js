// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Landing from './components/landing/Landing';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
