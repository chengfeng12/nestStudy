import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Tags } from "./tags.entity";

@Entity()
export class Crud {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  describe: string

  @CreateDateColumn()
  createTime: Date

  // 第一个是关联到哪张表，第二个是反向关系，对应字段
  @OneToMany(() => Tags, (tags) => tags.crud )
  tags: Tags[]
}
