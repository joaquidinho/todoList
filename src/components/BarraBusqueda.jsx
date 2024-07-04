import PropTypes from "prop-types";

const BarraBusqueda = ({ terminoBusqueda, setTerminoBusqueda }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Buscar contactos"
      value={terminoBusqueda}
      onChange={(e) => setTerminoBusqueda(e.target.value)}
    />
  );
};

BarraBusqueda.propTypes = {
  terminoBusqueda: PropTypes.string.isRequired,
  setTerminoBusqueda: PropTypes.func.isRequired,
};

export default BarraBusqueda;
