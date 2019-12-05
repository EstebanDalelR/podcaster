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
  let foundRecords =[]
  try {
    let filterFormula = `{UserEmail}="${decodedJWT.email}"`
    table.select({
      filterByFormula: filterFormula
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function(record) {
          foundRecords.push({
            id: record.id,
            fields: record.fields
          })
      });
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
  }, function done(err) {
      if (err) { console.error(err); return; }
      res.send(foundRecords)
  })
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
    throws(error);
  }
}