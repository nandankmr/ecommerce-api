import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import orders from './orders';
import products from './products';

@Table({ freezeTableName: true, underscored: true, timestamps: false })
class order_product_map extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'id',
    },
  })
  orderId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  productId!: number;

  @BelongsTo(() => orders, {
    foreignKey: 'orderId',
    targetKey: 'id',
  })
  order!: orders;

  @BelongsTo(() => products, {
    foreignKey: 'productId',
    targetKey: 'id',
  })
  product!: products;
}

export default order_product_map;
