import base from './_airtable_config'
import { throws } from 'assert'
import jwt from 'jsonwebtoken'
const bcrypt = require('bcryptjs')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req, res) => {
  const table = base('Users')
  try {
    table.create([{
      fields: {
        'Email': req.body.fields.Email,
        'Password': bcrypt.hashSync(req.body.fields.Password, 8)
      }
    }], function (err, records) {
      if (err) {
        console.log(err)
        throws(err)
        return
      }
      let token = jwt.sign(
        {
          email: records[0].fields.Email,
          id: records[0].id
        },
        process.env.JWT_SIGNING_SECRET
      )
      const msg = {
        from: 'noreply@shockmount.app',
        personalizations: [
          {
            'to': [
              {
                'email': records[0].fields.Email
              }
            ],
            'dynamic_template_data': {
              'receiverId': records[0].id
            }
          }
        ],
        'template_id': 'd-de4a7c8f6667400193e829b86a2d1c55'
      }
      sgMail.send(msg).then(() =>
        res.send({ podcasterUserJWT: token })
      )
    })
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
    throws(error)
  }
}
