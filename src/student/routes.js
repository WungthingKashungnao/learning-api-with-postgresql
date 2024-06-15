const router = require("express").Router();
const controller = require("./controller.js");

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
router.post("/addStudent", controller.addStudent);
router.delete("/deleteAllStudents", controller.deleteAllStudents);
router.delete("/deleteStudentById/:id", controller.deleteStudentById);

module.exports = router;
