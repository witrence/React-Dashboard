import express from "express";
import { getUser } from "../controllers/general.js";

const router = express.Router();

// getting the userID
router.get("/user/:id", getUser);
// router.get("/dashboard", getDashboardStats);

export default router;
