import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

export function loader() {
  const cliente = obtenerClientes();
  return cliente;
}

function Index() {
  const clientes = useLoaderData();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <td className="p-2 text-center">Cliente</td>
              <td className="p-2 text-center">Contacto</td>
              <td className="p-2 text-center">Acciones</td>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente key={cliente.id} cliente={cliente}/>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay Clientes</p>
      )}
    </>
  );
}

export default Index;
