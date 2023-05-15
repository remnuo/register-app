import axios from "axios";

const HOST = "http://localhost:4000/api/auth";

export async function signUpRequest(body) {
  try {
    const res = await axios.post(HOST + "/signup", body);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function clientRegisterRequest(body) {
  try {
    const respa = await axios.post(HOST + "/register", body);
    if (respa.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function getClientRequest(body) {
  try {
    const res = await axios.get(HOST + "/clients");
    return res.data;
  } catch (error) {
    return false;
  }
}

export async function signInRequest(body) {
  try {
    const { email, password } = body;

    const res = await axios.post(HOST + "/signin", { email, password });
    return res.data._id;
  } catch (error) {
    return false;
  }
}

export async function deleteByIdRequest(id) {
  try {
    const client = await axios.delete(HOST + `/clients/${id}`);
    return client.data;
  } catch (error) {
    return false;
  }
}

export async function updateByIdRequest(id, body) {
  try {
    const client = await axios.put(HOST + `/clients/${id}`, body);
    return client.data;
  } catch (error) {
    return false;
  }
}
