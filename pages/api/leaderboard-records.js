// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Airtable API Documentation: https://airtable.com/app7A0aWBnqoAHwsm/api/docs
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      var requestOptions = {
        method: 'GET',
        headers: { "Authorization": "Bearer " + process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN },
        redirect: 'follow'
      };

      fetch("https://api.airtable.com/v0/app7A0aWBnqoAHwsm/Leaderboard", requestOptions)
        .then(response => response.json())
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => console.log('error', error));
      break;
    case 'POST':
      var requestOptions = {
        method: 'POST',
        headers: {
          "Authorization": "Bearer " + process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
          "Content-Type": "application/json",
        },
        redirect: 'follow',
        body: JSON.stringify(req.body)
      };
      /*
      example request body:
      {
        "records": [
          {
            "fields": {
              "Player": "Test3 2023-04-09 06:40 AM CDT",
              "Time": "00:00",
              "Date": "2023-04-09T11:40:00.000Z"
            }
          },
          {
            "fields": {
              "Player": "Test4 2023-04-09 06:42 AM CST",
              "Time": "00:00",
              "Date": "2023-04-09T11:42:00.000Z"
            }
          }
        ]
      }
      */

      fetch("https://api.airtable.com/v0/app7A0aWBnqoAHwsm/Leaderboard", requestOptions)
        .then(response => response.json())
        .then(result => {
          res.status(200).json(result)
        })
        .catch(error => console.log('error', error));
      break;
    default:
      res.status(501).send('The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code)')
      break;
  }
}
