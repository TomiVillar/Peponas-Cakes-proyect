// App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Encabezado from './components/encabezado';
import Formulario from './components/formulario';
import ListaTareas from './components/listaTareas';
import Card from './components/card';
import Navbar from './components/navBar';

import miImagen from './images/foto.png';

import Productos from './2/productos';
import Cursos from './2/cursos';

function App() {
  const [tareas, setTareas] = useState<string[]>([]);

  const agregarTarea = (nuevaTarea: string) => {
    if (nuevaTarea.trim() === '') return;
    setTareas([...tareas, nuevaTarea]);
  };

  const PaginaInicio = () => (
    <>
      <Encabezado />
      <Formulario onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} />
      <div className="mt-5">
        <Card
          title="Ejemplo de Tarjeta"
          description="Esta es una tarjeta de ejemplo que aparece debajo de la lista de tareas."
          imageUrl={miImagen}
          action={() => alert('¡Clic en la tarjeta de ejemplo!')}
          className="mx-auto"
        />
      </div>
    </>
  );

  return (
    <Router>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
