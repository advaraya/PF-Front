const axios = require("axios").default;

async function createAd(nombre, descripcion, venta, precio, foto, tags) {
  try {
    let dateCreation = new Date();
    let username = localStorage.gerItem("cookie-login");
    var body = {
      nombre,
      descripcion,
      venta,
      precio,
      foto,
      tags,
      dateCreation,
      username,
    };
    console.log(body);

    axios.defaults.withCredentials = true;

    var response = await axios.post(
      "http://ec2-18-222-126-169.us-east-2.compute.amazonaws.com/api/createAd",
      body
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}

export default createAd;
