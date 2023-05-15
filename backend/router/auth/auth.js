import express from "express";
import {
  signIn,
  signOut,
  signUp,
  registerClient,
  getClientsFromMongoDB,
  deleteById,
  updateById,
} from "../../controllers/auth/index.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/signout", signOut);
router.post("/register", registerClient);

router.get("/clients", getClientsFromMongoDB);

router.delete("/clients/:id", deleteById);

router.put("/clients/:id", updateById);

export default router;
