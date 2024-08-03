import "./App.css";
import SildeNavbar from "./components/SideNavbar";
function App() {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <SildeNavbar />
        </div>
        <div className="col-span-5">Hi</div>
      </div>
    </>
  );
}

export default App;
