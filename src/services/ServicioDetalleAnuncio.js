// Endpoint: /apiv1/anuncios/< ID de MongoDB >
// Este endpoint está securizado, es decir, si la cookie no está seteada el endpoint denegará el acceso
//ESto lo tengo que cambiar

const axios = require("axios").default;

async function getDetalleAnuncio(IdAnuncio) {
  try {
    const response = await axios.get(
      //"http://localhost:8080/api/anuncios/" + IdAnuncio
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/anuncios/" +
        IdAnuncio
      //{ withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

/*Lo puedo cambiar por esto? --> async function getDetalleAnuncio(name) {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8080/api/anuncios/ + name
    );
    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
} */

export default getDetalleAnuncio;
