import Collections from "./components/Collections";
import Header from "./components/Header";
import SearchCard from "./components/SearchCard";
import "./css/App.css";


function App(){
    return (
       <div className="App">
        <Header/>
        <SearchCard/>
        <Collections/>
       </div>
    )
}

export default App;