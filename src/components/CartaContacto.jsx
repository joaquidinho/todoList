
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const CartaContacto = ({ contacto, eliminarContacto, editarContacto }) => {
  return (
    <div className="card mb-5">
      <div className="card-body">
        <img src="https://cdn-icons-png.flaticon.com/512/95/95641.png" className="card-img-top" alt="" />
        <h5 className="card-subtitle">{contacto.name}</h5>
        <p className="card-text">{contacto.email}</p>
        <p className="card-text">{contacto.telefono}</p>
        <button className="btn btn-danger btn-sm float-right" onClick={() => eliminarContacto(contacto)}> X </button>
        <button className="btn btn-primary" onClick={() => editarContacto(contacto)}>Editar</button>
      </div>
    </div>
  );
};

CartaContacto.propTypes = {
  contacto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    importante: PropTypes.bool,
  }).isRequired,
  eliminarContacto: PropTypes.func.isRequired,
  editarContacto: PropTypes.func.isRequired,
};

export default CartaContacto;
