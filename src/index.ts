import mongoose from 'mongoose';

import * as serverService from './services/server.service';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const DB_URI = process.env.DB_URI || 'mongodb+srv://admin:admin@cluster0.7mzgoou.mongodb.net/managerApp';


(async () => {
  try {
    await mongoose.connect(DB_URI);    
    serverService.server.listen(PORT, function () {
      console.log('Server is waiting connection...');
      console.log(DB_URI);

    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
