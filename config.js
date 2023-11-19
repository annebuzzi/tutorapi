console.log(process.env.EXPIRATION);
module.exports = {
  port: process.env.PORT || 3000,
  jwt: {
    secret: process.env.SECRET,
    expiration: parseInt(process.env.EXPIRATION),
  },
 
 dbconfig: {
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    passwd: process.env.DBPASS,
    dialect: process.env.DBDIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      underscored: true,
      freezeTable: true,
      timestamps: true,
      paranoid: false,
    },
  },
};
