import base from './_airtable_config'
import { throws } from 'assert'
export default (req, res) => {
   const table = base('Users')
  console.log(req.body)
  try {
    table.create([req.body], function(err, records) {
      if (err) {
        console.log(err)
        throws(err);
        return;
      }
      res.send(records)
    });
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
    throws(error);
  }
}