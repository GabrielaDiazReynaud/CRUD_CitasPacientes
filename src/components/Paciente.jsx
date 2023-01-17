const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  };
  return (
    <div className="bg-white shadow-md m-3 px-5 py-10 rounded-t-2xl sm:px-7">
      <p className="font-bold mb-3 text-gray-700">
        {" "}
        Nombre Paciente:{" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        {" "}
        Doctor de cabecera :{" "}
        <span className="font-normal normal-case">{paciente.doctor}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        {" "}
        Correo :{" "}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        {" "}
        Dia de la consulta :{" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        {" "}
        Diagnostico :{" "}
        <span className="font-normal normal-case">{paciente.diagnostico}</span>
      </p>
      <div className="flex flex-wrap justify-between mt-10 gap-y-2">
        <button
          type="button"
          className="py-2 px-10 bg-green-600 hover:bg-green-400 text-white font-bold uppercase rounded-lg "
          onClick={() => setPaciente(paciente)}
        >
          Modificar
        </button>
        <button
          type="button"
          className=" py-2 px-10 bg-red-600  hover:bg-red-400 text-white font-bold uppercase rounded-lg "
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
