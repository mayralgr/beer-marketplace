const { Router } = require("express");
const { getPersons, getPerson, savePerson, updatePerson, deletePerson } = require("../controller/person.controller");
const router = Router();

router.get("/", getPersons);
router.get("/:id", getPerson);
router.post("/", savePerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
