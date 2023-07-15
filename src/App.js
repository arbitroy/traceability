import './App.css';
import Navbar from './Navbar';
import DashBoard from './dashboard'
function App() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <DashBoard/>
    </div>
    </>
  );
}

export default App;
