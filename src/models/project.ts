import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Project extends Model {
  public id!: number;
  public name!: string;
  public managerId!: number; // ID du gérant
}

Project.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    managerId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Project',
  }
);

export default Project;