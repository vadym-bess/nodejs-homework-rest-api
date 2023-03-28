const mongoose = require("mongoose");
const app = require("./app");

const mongoUri =
  "mongodb+srv://bess777:111116@cluster0.yqnuvbs.mongodb.net/db-contacts";

mongoose.connect(mongoUri);

const db = mongoose.connection;

app.listen(3000, () => {
  console.log("Server is running. Use your API on port: 3000");
  db.once("open", () => {
    console.log("Database connection is successful!");
  });
  db.on("error", console.error.bind(console, "Connection error..."));
});

// const app = require("./app");
// const { connectMongo } = require("./db/connection");

// const start = async () => {
//   try {
//     await connectMongo();

//     console.log("Database connection successful");

//     app.listen(3000, () => {
//       console.log("Server running. Use our API on port: 3000");
//     });
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// start();

// const app = require("./app");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config({ path: "./.env" });

// const PORT = process.env.PORT || 3000;
// const mongoUri = `mongodb+srv://bess777:111116@cluster0.yqnuvbs.mongodb.net/?retryWrites=true&w=majority`;

// const connection = mongoose.connect(mongoUri, {
//   promiseLibrary: global.Promise,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

// connection
//   .then(() => {
//     app.listen(PORT, function () {
//       console.log(`Server is running. Use our API on port: ${PORT}`);
//     });
//   })
//   .catch((err) =>
//     console.log(`Server is not running. Error message: ${err.message}`)
//   );
