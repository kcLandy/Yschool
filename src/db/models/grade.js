module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    enrollmentId: { type: DataTypes.INTEGER, allowNull: false },
    value: { type: DataTypes.DECIMAL(5,2), allowNull: false },
    comment: { type: DataTypes.TEXT }
  }, {});
  return Grade;
};
