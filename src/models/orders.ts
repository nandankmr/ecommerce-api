import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import order_product_map from './order_product_map';

@Table({ freezeTableName: true, underscored: true, timestamps: false })
class orders extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  orderDescription!: string;

  @HasMany(() => order_product_map, { foreignKey: 'orderId', sourceKey: 'id' })
  products!: order_product_map[];

  @Column({ type: DataType.DATE, allowNull: false })
  createdAt!: Date;
}

export default orders;
