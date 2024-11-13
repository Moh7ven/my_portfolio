import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mohamed Sangare - Développeur Web et Mobile MERN</h1> */}
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-[10%]">
        <Hero />
        <About />
        <WorkExperience />
      </div>
    </>
  );
}

export default App;
