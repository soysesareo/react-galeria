import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <div className='contenedor-main'>
        <Header
        cabecera='Galería de Imágenes con React'/>
        <Card 
        imagen='martin'
        nombre='Martín Pescador'
        tipo='Pájaro'/>
        <Card 
        imagen='tigre'
        nombre='Tigre'
        tipo='Carnívoro'/>
        <Card 
        imagen='carpintero'
        nombre='Carpintero'
        tipo='Pájaro'/>
        <Footer />
        <Alert />
      </div>
      {/* <div>
      <Button variant="primary" size="lg">
            Ver más imágenes
          </Button>
      </div> */}
    </div>
  );
}

export default App;