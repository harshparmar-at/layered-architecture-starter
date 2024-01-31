const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "admin", {
  host: "0.0.0.0",
  port: 3306,
  dialect: "mysql",
  dialectOptions: {
    multipleStatements: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database: ", error);
  });

export default sequelize;
