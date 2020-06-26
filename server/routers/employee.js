const express = require("express");
const router = express.Router();
const Employee = require("../model/employee");

/* HTTP methods for employee
    
    GETALL -> 
    GET{id} ->  
    POST ->  
    PATCH   ->  
    DELETE  ->  
*/

//Get all employees
router.get("/", async (req, res) => {
  let employees = await Employee.findAll();
  res.send(employees);
});

//Create new employee
router.post("/", async (req, res) => {
  let { name, phone,job_title } = req.body;

  await Employee.create({  name, phone, job_title })
    .then((new_employee) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: "Employee Created !!!",
        new_employee,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
        success: false,
        message: "Internal Server Error",
        Error: err,
      });
    });
});

module.exports = router;
// //Get hospital by id
// router.get("/:id", async (req, res) => {
//   let id = req.params.id;
//   let hospital = await Hospital.findByPk(id).catch((err) =>
//     res.status(404).send({
//       status: 404,
//       success: false,
//       message: "Invalid hospitalid ... ",
//       Error: err,
//     })
//   );
//   res.send({
//     status: 200,
//     success: true,
//     data: {
//       hospital,
//     },
//   });
// });



// //Update Hospital Info
// router.put("/:id", async (req, res) => {
//   let id = req.params.id;
//   let { name, address } = req.body;
//   let CurrentHospital = await Hospital.findByPk(id)
//     .then((response) => {
//       return response._previousDataValues;
//     })
//     .catch((err) =>
//       res.status(404).send({
//         status: 404,
//         success: false,
//         message: "Invalid hospitalid ... ",
//       })
//     );

//   name = name ? name : CurrentHospital.name;
//   address = address ? address : CurrentHospital.address;

//   await Hospital.update(
//     {
//       name: name,
//       address: address,
//     },
//     {
//       where: {
//         id: id,
//       },
//     }
//   )
//     .then(() =>
//       res.status(200).send({
//         status: 200,
//         success: true,
//         message: "Update Successful!!!",
//       })
//     )
//     .catch((err) =>
//       res.status(500).send({
//         status: 500,
//         success: false,
//         message: "Update Failed...",
//       })
//     );
// });


