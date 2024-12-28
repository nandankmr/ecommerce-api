import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ freezeTableName: true, underscored: true, timestamps: false })
class products extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  productName!: string;

  @Column({ type: DataType.STRING })
  productDescription!: string;
}

export default products;
