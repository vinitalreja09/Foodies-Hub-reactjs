import Navbar from "./components/navbar";
import Explore from "./components/Explore";
import ImproveSection from "./components/ImproveSecton";
import Quote from "./components/Quote";
import TopChef from "./components/TopChef";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className="container main">
        <Explore/>
        <ImproveSection/>
        <Quote/>
        <TopChef/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
