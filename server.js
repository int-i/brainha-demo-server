const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const { SERVER_HOST, SERVER_PORT } = process.env;

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`brainha server is running on ${SERVER_PORT}`);
});
