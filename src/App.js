import './App.css';

import Navbar from './sections/Navbar';
import Present from './sections/Present';
import Capacities from './sections/Capacities';
import Projects from './sections/Projets';
import Contact from './sections/Contact';


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
