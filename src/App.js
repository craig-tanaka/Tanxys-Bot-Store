import Header from './components/Header';
import Nav from './components/Nav';
import Testimonials from './components/testimonials';
import OurBots from './components/OurBots';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Testimonials/>
      <OurBots/>
    </div>
  );
}

export default App;
