import base from './_airtable_config'
import { throws } from 'assert'
import jwt from 'jsonwebtoken'

export default (req, res) => {
  const table = base('Podcasts')
  console.log(req.body)
  let decodedJWT
  jwt.verify(req.body.jwt, process.env.JWT_SIGNING_SECRET, (err, decoded) => {
    decodedJWT = decoded
  });
  let sendObject = {
    "fields": {
      ...req.body.fields,
      "User": [`${decodedJWT.id}`
      ]
    }
  }
  try {
    table.create([sendObject], function (err, records) {
      if (err) {
        console.log(err)
        /* throws(err); */
        return;
      }
      res.send(records)
    });
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
/*     throws(error);
 */  }
}