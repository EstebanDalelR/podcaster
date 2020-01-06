import base from './_airtable_config'
import { throws } from 'assert'

export default (req, res) => {
  const table = base('Users')
  try {
    table.update([{
      id: req.body.email,
      fields: {
        'ConfirmedEmail': true
      }
    }], function (err, records) {
      if (err) {
        console.log(err)
        throws(err)
        return
      }
      records.forEach(function (record) {
        console.log()
        res.send({ email: record.get('Email') })
      })
    })
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
    throws(error)
  }
}
