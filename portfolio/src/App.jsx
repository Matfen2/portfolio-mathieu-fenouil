import './App.css';

import Navbar from './components/Navbar';
import Present from './components/Present';
import Capacities from './components/Capacities';
import Projects from './components/Projets';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Present />
      <Capacities />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
