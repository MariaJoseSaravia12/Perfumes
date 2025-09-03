import "./boton.css";

const Boton = ({ texto, onClick }) => {
  return (
    <button className="boton-personalizado" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
