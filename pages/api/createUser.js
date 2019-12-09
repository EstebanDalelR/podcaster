import base from './_airtable_config'
import { throws } from 'assert'
import jwt from 'jsonwebtoken'
const bcrypt = require('bcryptjs')

export default (req, res) => {
  const table = base('Users')
  console.log(req.body)
  try {
    table.create([{
      fields: {
        "Email": req.body.fields.Email,
        "Password": bcrypt.hashSync(req.body.fields.Password, 8)
      }
    }], function (err, records) {
      if (err) {
        console.log(err)
        throws(err);
        return;
      }
      let token = jwt.sign(
        {
          email: records[0].fields.Email,
          id: records[0].id
        },
        process.env.JWT_SIGNING_SECRET
      )

      res.send({ podcasterUserJWT: token })
    });
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
    throws(error);
  }
}