import { getMessages, createMessage, deleteMessage } from "../controllers/messageController.js";
import { catchErrors } from "../utils.js";
import { Router } from "express";

const router = Router();

router.get("/messages", catchErrors(getMessages));
router.post("/messages", catchErrors(createMessage));
router.delete("/messages/:id", catchErrors(deleteMessage));

export default router;