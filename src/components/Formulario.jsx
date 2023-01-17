import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes,  paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [doctor, setDoctor] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setDoctor(paciente.doctor);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setDiagnostico(paciente.diagnostico);
    }
  }, [paciente]);
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, doctor, email, fecha, diagnostico].includes("")) {
      console.log("hay campos vacios");
      setError(true);
    } else {
      console.log("todo bien");
      setError(false);

      const objetoPaciente = {
        nombre,
        doctor,
        email,
        fecha,
        diagnostico,
      };
      if (paciente.id) {
        //Editar registro
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) => {
          if (pacienteState.id === paciente.id) {
            return objetoPaciente;
          } else {
            return pacienteState;
          }
        });

        setPacientes(pacientesActualizados);
        localStorage.setItem('pacientes', JSON.stringify(pacientesActualizados))
        setPaciente({});
      } else {
        //Nuevo registro
        objetoPaciente.id = generarId();
        localStorage.setItem('pacientes', JSON.stringify([...pacientes, objetoPaciente]))
        setPacientes([...pacientes, objetoPaciente]);
      }

      setNombre("");
      setDoctor("");
      setEmail("");
      setFecha("");
      setDiagnostico("");
    }
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="text-md mt-5 mb-5 text-center">
        {" "}
        Agrega pacientes y{" "}
        <span className="text-blue-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Paciente
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="doctor"
            className="block text-gray-700 uppercase font-bold"
          >
            Doctor de cabecera
          </label>
          <input
            id="doctor"
            type="text"
            placeholder="Nombre del doctor"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="correo"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo Electronico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="example@hotmail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Dia de la consulta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="diagnostico"
            className="block text-gray-700 uppercase font-bold"
          >
            Diagnostico
          </label>
          <textarea
            id="diagnostico"
            placeholder="Describa el diagnostico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={diagnostico}
            onChange={(e) => setDiagnostico(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-blue-600 w-full p-3 uppercase font-bold text-white hover:bg-blue-400 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente " : "Agregar Paciente"}
        ></input>
      </form>
    </div>
  );
};

export default Formulario;
