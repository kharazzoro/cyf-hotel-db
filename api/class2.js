const express = require("express");
const router = express.Router();
const filename = "./database/database.sqlite";
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename
  }
});
router.get("/customers", (req, res) => {
  const sqlStatement = "select * from customers";
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  }); // TODO: fix code here
});
router.get("/customers/:id", (req, res) => {
  const sqlStatement = `select * from customers where id =${req.params.id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
   // TODO: add code here
});
router.get("/customers/surname/:surname", function(req, res) {
  const sqlStatement = `select * from customers where surname ="${
    req.params.surname
  }"`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  // TODO: add code here
});
router.post("/customers/", (req, res)=> {
  const body= req.body
  const sqlStatement = `INSERT INTO customers(title, firstname, surname, email) VALUES ("${body.title}", "${body.firstname}", "${body.surname}", "${body.email}")`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.send("succesfuly added");
  // TODO: add code here
});
router.put("/customers/:id", function(req, res) {
  const body = req.body
  const customerId= req.params.id
  const sqlStatement = `UPDATE customers 
  SET firstname= "${body.firstname}",
      surname="${body.surname}" 
  WHERE id=${customerId}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.send("succesfuly updated");
  // EXPECTED JSON Object:
  // {
  //   title: 'Mr',
  //   firstname: 'Laurie',
  //   surname: 'Ainley',
  //   email: 'laurie@ainley.com'
  // }
  // TODO: add code here
});
router.delete("/customers/:id", (req,res)=>{
  const body = req.body
  const customerId = req.params.id
  const sqlStatement = `DELETE FROM customers 
  WHERE id=${customerId}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.send("succesfuly deleted");
});
// get '/reservations'
// TODO: add code here
router.get("/reservations", (req, res) => {
  const sqlStatement = "select * from reservations";
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  }); // TODO: fix code here
});
// get '/reservations/:id'
// TODO: add code here
router.get("/reservations/:id", (req, res) => {
  const sqlStatement = `select * from reservations where id =${req.params.id}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  // TODO: add code here
});
// delete '/reservations/:id'
// TODO: add code here
router.delete("/reservations/:id", (req, res) => {
  const body = req.body;
  const customerId = req.params.id;
  const sqlStatement = `DELETE FROM reservations 
  WHERE id=${customerId}`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.send("succesfuly deleted");
});
// get '/reservations/starting-on/:startDate'
// TODO: add code here
// router.get("/reservations/starting-on/:startDate", (req, res) => {
//   const sqlStatement = `select * from reservations where id =${req.params.id}`;
//   knex.raw(sqlStatement).then(data => {
//     res.json(data);
//   });
//   // TODO: add code here
// });
// get '/reservations/active-on/:date'
// TODO: add code here
// post '/reservations'
// EXPECTED JSON Object:
// {
//   customer_id: 1,
//   room_id: 1,
//   check_in_date: '2018-01-20',
//   check_out_date: '2018-01-22',
//   room_price: 129.90
// }
// TODO: add code here
router.post("/reservations/", (req, res) => {
  const body = req.body;
  const sqlStatement = `INSERT INTO reservations (customer_id, room_id, check_in_date, check_out_date, room_price) VALUES ("${body.customer_id}", "${body.room_id}", "${body.check_in_date}", "${body.check_out_date}", "${body.room_price}")`;
  knex.raw(sqlStatement).then(data => {
    res.json(data);
  });
  res.send("succesfuly added");
  // TODO: add code here
});
// get `/detailed-invoices'
// TODO: add code here
// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here
module.exports = router;