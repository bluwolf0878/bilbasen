import dbConfig from '../models/carModel.js';
import { DataTypes, Model } from 'sequelize';

carModel.init({
}, {
  sequelize: dbConfig,
  modelName: 'brand', // Modellens navn
  underscored: true, // True: car_brands || False: carBrands
  freezeTableName: true, // True: car || False: cars
  createdAt: true, // Tilføjer createdAt felt
  updatedAt: true, // Tilføjer updatedAt felt
});

carBrand.init({
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

  logo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: dbConfig,
  modelName: 'brand'
  // Indstillinger
});