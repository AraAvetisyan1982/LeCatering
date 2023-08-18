import './App.css';
import HeaderButton from './components/headerButtons';
import NavBar from './navBar';
import Burger from './components/burger';
import Tradition from './tradition';
import Contacts from './components/contacts';
import Footer from './footer';
import Menu from './menu';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Burger />
      <Tradition />
      <Menu />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
