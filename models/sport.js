'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sport.hasMany(models.Session,{
        foreignKey: "sportId",
      });
      Sport.hasMany(models.Sessionplayer,{
        foreignKey: "sportId",
            });
    }
    static async updateSport(name, id) {
      return this.update({ sportname: name },
        { where: { id: id } });
    }
  }
  Sport.init({
    sportname: DataTypes.STRING,
    adminid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sport',
  });
  return Sport;
};