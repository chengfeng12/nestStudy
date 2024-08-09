import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Crud } from "./crud.entity";

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date

  @ManyToOne(() => Crud) // 会自动变成 crudId
  crud: Crud
}