import dbConfig from '../models/carModel';
import { DataTypes, Model } from 'sequelize';

carModel.init({
}, {
  sequelize: dbConfig,
  modelName: 'carcategory', // Modellens navn
  underscored: true, // True: car_brands || False: carBrands
  freezeTableName: true, // True: car || False: cars
  createdAt: true, // Tilføjer createdAt felt
  updatedAt: true, // Tilføjer updatedAt felt
});

carCategory.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  sequelize: dbConfig,
  modelName: 'category'
  // Indstillinger
});