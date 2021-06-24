const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    priority: {
      type: DataTypes.STRING,
    },
    deadLineDate: {
      type: DataTypes.DATEONLY,
    },
  });
};
