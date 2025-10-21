module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    courseId: { type: DataTypes.INTEGER, allowNull: false },
    authorId: { type: DataTypes.INTEGER, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false }
  }, {});
  return Comment;
};
