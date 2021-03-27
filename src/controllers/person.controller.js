/**
 * Method to get all persons
 * @param {*} req
 * @param {*} res
 */
const getPersons = (req, res) => {
    const persons = [
      {
        name: "Omar Morales",
        programmingLanguage: "Java",
        beer: "Pacifico",
      },
      {
          name: "Luz",
          programmingLanguage: "C#",
          beer: "Indio",
        },
        {
          name: "Carlos F",
          programmingLanguage: "Docker JS",
          beer: "Modelo Especial",
        },
    ];
    res.status(200).json(persons);
  };

  /**
 * Method to get a person
 * @param {*} req
 * @param {*} res
 */
const getPerson = (req, res) => {
    
    const person = {
        id: req.params.id,
        name: "Omar Morales",
        programmingLanguage: "Java",
        beer: "Pacifico",
      }
    
    res.status(200).json(person);
  };
  
  const savePerson = (req, res) => {
    console.log(req.body);
    res.status(201).json({ msg: "SAVED", data: req.body});
  };

  const updatePerson = (req, res) => {
    console.log(req.params.id)
    console.log(req.body);
    res.status(201).json({ msg: `person with id ${req.params.id} updated`, data: {id:req.params.id, ...req.body}});
  };

  const deletePerson = (req, res) => {
    console.log(req.params.id)
    res.status(204);
  };

  module.exports = { getPersons, getPerson, savePerson, updatePerson, deletePerson };
  