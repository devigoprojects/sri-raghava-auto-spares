import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchCard from "./components/SearchCard";
import WhatsAppCTA from "./components/Whatsapp_cta";
import Types from "./components/Types";
import "./css/App.css";


function App(){
    return (
       <div className="App">
       
        <Header/>
        <Hero/>
        <Types/>
       
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2811908734147!2d78.32277681487783!3d17.494085488014765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c9f7902fd3%3A0xe8abca6001046f14!2sSri%20Raghava%20auto%20spares!5e0!3m2!1sen!2sin!4v1688039896872!5m2!1sen!2sin" title="map" ></iframe>
        <WhatsAppCTA/>
        <Footer/>
       </div>
    )
}

export default App;