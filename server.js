const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const { BRAINHA_HOST, BRAINHA_PORT } = process.env;

app.listen(BRAINHA_PORT, BRAINHA_HOST, () => {
  console.log(`brainha server is running on ${BRAINHA_PORT}`);
});
