import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchCard from "./components/SearchCard";
import WhatsAppCTA from "./components/Whatsapp_cta";
import "./css/App.css";


function App(){
    return (
       <div className="App">
       
        <Header/>
        <Hero/>
        <SearchCard/>
        <Collections/>
        <WhatsAppCTA/>
        <Footer/>
       </div>
    )
}

export default App;