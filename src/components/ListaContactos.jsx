import { useState } from "react";
import PropTypes from "prop-types"; //herramienta para que se reciban las propiedades props porque me daba error solo con props
import CartaContacto from "./CartaContacto";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const ListaContactos = ({ contactos, eliminarContacto, editarContacto, buscar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5; // Número de contactos por página

  // Filtrar contactos basados en el término de búsqueda
  const contactosFiltrados = contactos.filter(contacto =>
    contacto.name.toLowerCase().includes(buscar.toLowerCase()) ||
    contacto.email.toLowerCase().includes(buscar.toLowerCase()) ||
    contacto.telefono.includes(buscar)
  );

  // Lógica para mostrar los contactos
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contactosFiltrados.slice(indexOfFirstContact, indexOfLastContact);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Renderizar las páginas de la paginación
  const renderPaginationItems = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(contactosFiltrados.length / contactsPerPage); i++) {
      pageNumbers.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="contact-list-container">
      <div className="contact-list">
        {currentContacts.map((contacto) => (
          <CartaContacto
            key={contacto.email}
            contacto={contacto}
            eliminarContacto={eliminarContacto}
            editarContacto={editarContacto}
          />
        ))}
      </div>
      <Pagination className="justify-content-center mt-4">
        {renderPaginationItems()}
      </Pagination>
    </div>
  );
};

ListaContactos.propTypes = {
  contactos: PropTypes.arrayOf(PropTypes.object).isRequired,
  eliminarContacto: PropTypes.func.isRequired,
  editarContacto: PropTypes.func.isRequired,
  buscar: PropTypes.string.isRequired,
};

export default ListaContactos;
