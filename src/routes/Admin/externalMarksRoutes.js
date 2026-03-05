import express from "express";
import {
  submitExternalData,
  getExternalById,
  deleteAllExternal,
  getMyExternalMarks,
} from "../../controllers/Admin/ExternalMarksController.js";
import { protect, restrictTo } from "../../controllers/authController.js";

const router = express.Router();

// Apply protect middleware to all routes
router.use(protect);
router.get("/my-marks", getMyExternalMarks);

// Routes for admin
router
  .route("/:userId")
  .post(restrictTo("admin"), submitExternalData)
  .get(getExternalById)
  .delete(restrictTo("admin"), deleteAllExternal);

export default router; 