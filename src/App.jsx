import { useState, useEffect } from "react";
import FormaContacto from "./components/FormaContacto";
import ListaContactos from "./components/ListaContactos";
import BarraBusqueda from "./components/BarraBusqueda";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [contactos, setContactos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  useEffect(() => {
    const contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];
    setContactos(contactosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (contacto) => {
    setContactos([...contactos, contacto]);
  };

  const eliminarContacto = (contactoAEliminar) => {
    setContactos(contactos.filter(contacto => contacto !== contactoAEliminar));
  };

  const editarContacto = (contactoAEditar) => {
    const nombreEditado = prompt("Nuevo nombre:", contactoAEditar.name);
    const correoEditado = prompt("Nuevo correo:", contactoAEditar.email);
    const telefonoEditado = prompt("Nuevo teléfono:", contactoAEditar.telefono);

    if (nombreEditado && correoEditado && telefonoEditado) {
      setContactos(contactos.map(contacto =>
        contacto === contactoAEditar
          ? { ...contacto, name: nombreEditado, email: correoEditado, telefono: telefonoEditado }
          : contacto
      ));
    }
  };

  return (
    <div className="app-container">
      <h1>Lista de Contactos</h1>
      <FormaContacto agregarContacto={agregarContacto} />
      <BarraBusqueda terminoBusqueda={terminoBusqueda} setTerminoBusqueda={setTerminoBusqueda} />
      <ListaContactos
        contactos={contactos}
        eliminarContacto={eliminarContacto}
        editarContacto={editarContacto}
        buscar={terminoBusqueda}
      />
    </div>
  );
};

export default App;
