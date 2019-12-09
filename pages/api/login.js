import base from './_airtable_config'
import { throws } from 'assert'
import jwt from 'jsonwebtoken'
const bcrypt = require('bcryptjs')

export default (req, res) => {
  const table = base('Users')
  console.log(req.body)
  try {
    table.select(
      {
        maxRecords: 1,
        filterByFormula: "(" + "Email" + "='" + req.body.Email.toString() + "')",
        fields: ["Email", "Password"]
      }
    ).eachPage(
      function page(records, fetchNextPage) {
        if (records.length === 0) {
          res.send({ error: "User not found", errorCode: 0 })
        } else {
          bcrypt.compare(`${req.body.Password}`, `${records[0].fields.Password}`)
            .then((bcryptres) => {
              if (bcryptres) {

                let token = jwt.sign(
                  {
                    email: records[0].fields.Email,
                    id: records[0].id
                  },
                  process.env.JWT_SIGNING_SECRET
                )
                res.send({ podcasterUserJWT: token })
              } else {
                res.send({ error: "Wrong password", errorCode: 1 })
              }
            })
            .catch(() => {
              res.send({ error: "Wrong password", errorCode: 1 })
            })
        }
        fetchNextPage();
      }, function done(err) {
        if (err) { console.error("error updating" + err); reject(err); return false; }
      }
    );
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
    throws(error);
  }
}