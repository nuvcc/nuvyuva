// Step 1: Import the S3Client object and all necessary SDK commands.
const {
  PutObjectCommand,
  GetObjectCommand,
  S3Client,
} = require('@aws-sdk/client-s3');
const { accessKeyIdSpaces, secretAccessKeySpaces } = require('../../utils');

const fs = require('fs');
// Step 2: The s3Client function validates your request and directs it to your Space's specified endpoint using the AWS SDK.
const s3Client = new S3Client({
  endpoint: 'https://sgp1.digitaloceanspaces.com', // Find your endpoint in the control panel, under Settings. Prepend "https://".
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  region: 'shp1', // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
  credentials: {
    accessKeyId: accessKeyIdSpaces, // Access key pair. You can create access key pairs using the control panel or API.
    secretAccessKey: secretAccessKeySpaces, // Secret access key defined through an environment variable.
  },
});

const file = fs.readFileSync('./server/tempImages/qr-123.png');

const main = async (file) => {
  const params = {
    Bucket: 'nuvyuva-storage',
    Key: 'concertTickets/image3.png',
    Body: file,
  };
  const command = new PutObjectCommand(params);

  try {
    await s3Client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    console.log('Success: ', `#${params.Key} uploaded to ${params.Bucket}`);
    // console.log(str);
  } catch (err) {
    console.error(err);
  }
};

module.exports = main;

main(file);
