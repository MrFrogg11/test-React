import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './componentes/Sidebar';
import Componente from './componentes/componente';

const Inicio = () => (
  <div>
    <h2>Contenido de Inicio</h2>
    {/* Agrega el contenido específico de la página de inicio */}
  </div>
);

function SobreNosotros() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginLeft: '5em' }}> {/* Aquí va tu contenido principal */}
        <h2>Sobre Nosotros</h2>
        <p>¡Bienvenido a nuestra página "Sobre Nosotros"! Aquí puedes agregar información sobre tu equipo o empresa.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
