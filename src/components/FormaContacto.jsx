import React, { useState } from "react"; 
import PropTypes from "prop-types"; 
import "bootstrap/dist/css/bootstrap.min.css"

const FormaContacto = ({ agregarContacto }) => {
  const [name, setName] = useState(""); // Define el estado name
  const [email, setEmail] = useState(""); // Define el estado email
  const [telefono, setTelefono] = useState(""); // Define el estado telefono

  const manipularSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || !validateEmail(email) || !validateTelefono(telefono)) {
      alert("Datos inválidos. Por favor, revisa la información ingresada."); // Muestra una alerta si los datos son inválidos
      return;
    }

    agregarContacto({ name, email, telefono }); // Llama a la función agregarContacto con los datos del nuevo contacto
    setName(""); // Limpia el campo name
    setEmail(""); // Limpia el campo email
    setTelefono(""); // Limpia el campo telefono
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo electrónico
    return re.test(String(email).toLowerCase());
  };

  const validateTelefono = (telefono) => {
    const re = /^\d{10}$/; // Expresión regular para validar el número de teléfono
    return re.test(telefono);
  };

  return (
    <form onSubmit={manipularSubmit} className="contact-form">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número de Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

FormaContacto.propTypes = {
  agregarContacto: PropTypes.func.isRequired, // Valida que agregarContacto sea una función
};

export default FormaContacto; 
