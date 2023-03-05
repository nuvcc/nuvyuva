// Step 1: Import the S3Client object and all necessary SDK commands.
const {
  PutObjectCommand,
  GetObjectCommand,
  S3Client,
} = require('@aws-sdk/client-s3');
const { accessKeyIdSpaces, secretAccessKeySpaces } = require('../utils');

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

// Step 3: Define the parameters for the object you want to upload.
const params = {
  Bucket: 'nuvyuva-storage', // The path to the directory you want to upload the object to, starting with your Space name.
  Key: 'concertTickets/image2.png`', // Object key, referenced whenever you want to access this file later.
  Body: file, // The object's contents. This variable is an object, not a string.
  ACL: 'private', // Defines ACL permissions, such as private or public.
  Metadata: {
    // Defines metadata tags.
    'x-amz-meta-my-key': 'concert-ticket',
  },
};

// Step 4: Define a function that uploads your object using SDK's PutObjectCommand object and catches any errors.
const uploadObject = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log(
      'Successfully uploaded object: ' + params.Bucket + '/' + params.Key
    );
    return data;
  } catch (err) {
    console.log('Error', err);
  }
};

module.exports = uploadObject;

// Step 5: Call the uploadObject function.
uploadObject();
// const main = async () => {
//   const command = new PutObjectCommand({
//     Bucket: 'nuvyuva-storage',
//     Key: 'concertTickets/notRandom.txt',
//     Body: 'Not Random',
//   });

//   try {
//     const response = await s3Client.send(command);
//     // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
//     console.log(response);
//     // console.log(str);
//   } catch (err) {
//     console.error(err);
//   }
// };

// main();
