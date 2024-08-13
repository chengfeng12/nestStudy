import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated } from "typeorm";
// https://typeorm.bootcss.com/
@Entity()
export class Mysql {
  @PrimaryGeneratedColumn() // 创建一个主列，该值将使用自动增量值自动生成。 
  id: number
  @Column({ type: "varchar", length: 255 })
  name: string

  @Column({ select: true, comment: "注视" }) // select 查询时不会反回该字段 
  password: string

  @Column()
  age: number

  @CreateDateColumn({ type: "timestamp" }) // 自动申城当前时间
  createDate: Date

  @Generated('uuid') // 自动生成 uuid
  uuid: string

  @Column({
    type: 'enum',
    enum: [1, 2, 3],
    default: 1
  }) // 枚举类型
  menu: number

  @Column('simple-array')
  names: string[]

  @Column('simple-json')
  json: { name: string, age: number}
}
