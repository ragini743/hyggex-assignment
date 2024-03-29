import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="App py-10 px-6 md:p-10 max-w-screen-md mx-auto md: border-gray-400 md:shadow-lg md:my-4">
     <Header />
     <Body />
     <Footer />
    </div>
  );
}

export default App;
