import Paciente from "./Paciente";
function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">Listado Pacientes</h2>
          <p className="text-md mt-5 mb-5 text-center">
            {" "}
            Administrar{" "}
            <span className="text-blue-600 font-bold">Pacientes</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay Pacientes</h2>
          <p className="text-md mt-5 mb-5 text-center">
            {" "}
            Para agregar pacientes usar el{" "}
            <span className="text-blue-600 font-bold">Formulario</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
