const { Router } = require("express");
const { getPersons, getPerson, savePerson, updatePerson, deletePerson } = require("../controllers/person.controller");
const router = Router();

router.get("/person", getPersons);

router.get("/person/:id", getPerson);

router.post("/person", savePerson);

router.put("/person/:id", updatePerson);

router.delete("/person/:id", deletePerson);

module.exports = router;
