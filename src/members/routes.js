const { Router } = require("express");
const controller = require('./controller');

const router = Router();

// Define routes with their respective callback functions
router.get("/", controller.getMembers);
router.post("/", controller.addMembers);
router.get("/:id", controller.getMembersById);
router.put("/:id", controller.updateMembers);
router.delete("/:id", controller.removeMembers);

module.exports = router;
