import 'dotenv/config';
import mongoose from 'mongoose';

import * as serverService from './services/server.service';

const PORT = process.env.PORT || 4000;
const DB_URI = process.env.DB_URI || '';


(async () => {
  try {
    await mongoose.connect(DB_URI);    
    serverService.server.listen(PORT, function () {
      console.log(`Server is waiting connection on PORT ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
