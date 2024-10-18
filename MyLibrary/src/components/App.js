import '../assets/css/App.css';
import Header from './commons/header';
import Footer from './commons/footer';
import Main from './commons/Main';
import { useLocation } from "react-router-dom";

const App = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="App">
      {pathname !== '/login' && <Header /> }
      <Main />
      {pathname !== '/login' && <Footer /> }
    </div>
  );
}

export default App;
