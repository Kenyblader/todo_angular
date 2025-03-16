import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Task extends Model {
  public id!: number;
  public title!: string;
  public category!: string;
  public completed!: boolean;
  public estimatedTime!: number; // En minutes
  public photo?: string;
  public projectId?: number;
}

Task.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    estimatedTime: { type: DataTypes.INTEGER },
    photo: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'Task',
  }
);

export default Task;