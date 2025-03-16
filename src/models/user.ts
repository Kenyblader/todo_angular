import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model {
  public id!: number;
  public username!: string;
  public language!: string; // ex: "fr", "en"
}

User.init(
  {
    username: { type: DataTypes.STRING, allowNull: false },
    language: { type: DataTypes.STRING, defaultValue: 'fr' }, // Par défaut : français
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;