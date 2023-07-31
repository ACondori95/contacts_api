const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API'
  },
  host: 'contacts-36yq.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
