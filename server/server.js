import app from "./app.js";
import connectToDB from "./config/db.connection.js";

const PORT = process.env.PORT || 7000;

connectToDB()
.then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at PORT: ${PORT}`);
    });
  })

  .catch((e) => {
    console.log("❌ MongoDB connection failed!!!");
    console.log(e);
  });