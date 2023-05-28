import { Sequelize } from "sequelize";
// import dotenv from "dotenv";

// dotenv.config({
  
//   path: "./.env",
// });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is active");
  } catch (err) {
    console.log("Unable to connect to database", err);
  }
})();

export { sequelize };
