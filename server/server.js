import app from "./app.js";
import connectToDB from "./config/db.connection.js";

const PORT = process.env.PORT

connectToDB()
  .then(() => {
    app.listen(PORT || 7000, () => {
      console.log(`Server is runnig at http://localhost:${PORT}`);
    });
  })

  .catch((e) => {
    console.log("MongoDB connection failed!!!");
  });