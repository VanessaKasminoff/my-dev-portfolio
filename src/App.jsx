//STYLESHEET
import "./assets/css/App.css";

//COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div id="App">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
