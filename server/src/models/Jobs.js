module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.TEXT,
    company: DataTypes.STRING
  })

  Job.associate = function (models) {
  }

  return Job;
}
