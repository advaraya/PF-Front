const axios = require("axios").default;

async function login(username, password) {
  try {
    var body = { username, password };
    console.log(body);

    axios.defaults.withCredentials = true;

    var response = await axios.post(
      //"http://127.0.0.1:8080/api/authenticate",
      "http://ec2-3-15-24-178.us-east-2.compute.amazonaws.com/api/authenticate",
      body
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}

export default login;
