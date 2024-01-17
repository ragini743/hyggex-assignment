import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="App py-10 px-6 md:p-10 max-w-screen-md mx-auto border-gray-400 border-2 shadow-lg my-4">
     <Header />
     <Body />
     <Footer />
    </div>
  );
}

export default App;
