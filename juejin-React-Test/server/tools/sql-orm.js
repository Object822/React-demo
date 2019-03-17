//sequelize
let Sequelize = require("sequelize");
//数据库名，账号，密码
let sequelize = new Sequelize("juejin", "root", "root", {
  dialect: "mysql", // or "sqlite", "postgres", "mariadb"
  port: 3306, // or 5432 (for postgres)
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  timezone: '+8:00',
  dateStrings: true
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to MySQL has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });


let blog = sequelize.define("blog", {
  tid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull:false
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.INTEGER,
  },
  loadURL: {
    type: Sequelize.STRING,
  },
  label: {
    type: Sequelize.STRING,
  },
  decoration: {
    type: Sequelize.STRING,
  },
  // create_time: {
  //   type: Sequelize.STRING,
  // },
  // alter_time: {
  //   type: Sequelize.STRING,
  // },
  state: {
    type: Sequelize.INTEGER,
  },
  content: {
    type: Sequelize.TEXT,
  },
  comments: {
    type: Sequelize.INTEGER,
  },
  star: {
    type: Sequelize.INTEGER,
  },
}, {
    timestamps: false
  }
);


let myTable = {
  blog:blog
};

module.exports = myTable;    