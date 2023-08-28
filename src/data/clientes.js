export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
}

export async function obtenerCliente(clienteId) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${clienteId}`);
  const resultado = await respuesta.json();
  return resultado;
}


export async function agregarCliente(cliente) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await respuesta.json();
  } catch (error) {
    console.log(error)
  }
}

export async function actualizarCliente(clienteId, cliente) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${clienteId}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await respuesta.json();
  } catch (error) {
    console.log(error)
  }
}

export async function eliminarCliente(clienteId) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${clienteId}`, {
      method: 'DELETE'
    });
    await respuesta.json();
  } catch (error) {
    console.log(error)
  }
}
