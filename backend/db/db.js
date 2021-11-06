import mongoose from "mongoose";

const Connectiondb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connection with MongoDB : ON");
      } catch (e) {
    
    console.log("Error connecting to MongoDB:( \n " + e);
    
      }
    };
    export default { Connectiondb };