import dbConfig from '../models/carModel.js';
import { DataTypes, Model } from 'sequelize';

carModel.init({
}, {
  sequelize: dbConfig,
  modelName: 'car', // Modellens navn
  underscored: true, // True: car_brands || False: carBrands
  freezeTableName: true, // True: car || False: cars
  createdAt: true, // Tilføjer createdAt felt
  updatedAt: true, // Tilføjer updatedAt felt
});

carModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.DATE,
    allowNull: false
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  fueltype: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize: dbConfig,
  modelName: 'car'
  // Indstillinger
});