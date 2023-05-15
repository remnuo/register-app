import mongoose from "mongoose";

const ClientSchema = mongoose.Schema({
  firstName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },

  lastName: {
    type: String,
    minLength: 2,
    maxLength: 100,
  },

  email: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  },

  registerDate: {
    type: Date,
    required: true,
  },
});

const ClientModel = mongoose.model("Client", ClientSchema);

export default ClientModel;
