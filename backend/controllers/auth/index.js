import User from "../../db/UserModel.js";
import Client from "../../db/ClientModel.js";

// signIn (login user to db)
export async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password }, { id: true });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// signUp (register user to db)
export async function signUp(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.create({
      email,
      password,
    });

    const resp = {
      email: user.email,
      password: user.password,
      id: user.id,
    };

    res.json(resp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Register clients
export async function registerClient(req, res) {
  try {
    const { firstName, lastName, email, registerDate } = req.body;

    const client = await Client.create({
      firstName,
      lastName,
      email,
      registerDate,
    });

    const resp = {
      firstName: client.firstName,
      lastName: client.lastName,
      email: client.email,
      registerDate: client.registerDate,
      id: client.id,
    };

    res.json(resp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// signOut from db
export function signOut(req, res) {
  res.json({
    hello: "Hello world, signOut",
  });
}

// get registred clients From MongoDB
export async function getClientsFromMongoDB(req, res) {
  try {
    const clients = await Client.find({}, { __v: false });

    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// get registred Users From MongoDB
export async function getUsersFromMongoDB(req, res) {
  try {
    const users = await User.find({}, { __v: false });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// delete by id
export async function deleteById(req, res) {
  try {
    const { id } = req.params;

    const client = await Client.findByIdAndDelete(id);

    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// update by id
export async function updateById(req, res) {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, registerDate } = req.body;

    const client = await Client.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      registerDate,
    });

    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
