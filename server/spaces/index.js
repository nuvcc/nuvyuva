const AWS = require('aws-sdk');
const fs = require('fs');

const { accessKeyIdSpaces, secretAccessKeySpaces } = require('../utils');
const spacesEndpoint = new AWS.Endpoint('sgp1.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: accessKeyIdSpaces,
  secretAccessKey: secretAccessKeySpaces,
});

const file = fs.readFileSync('./server/tempImages/qr-123.png');

s3.putObject(
  {
    Bucket: 'nuvyuva-storage',
    Key: 'random.jpg',
    Body: file,
    ACL: 'public',
  },
  (err, data) => {
    if (err) return console.log(err);
    console.log('Your file has been uploaded successfully!', data);
  }
);
