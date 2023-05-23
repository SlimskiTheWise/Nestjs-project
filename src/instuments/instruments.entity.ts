import { TimestampEntity } from 'src/entities/timestamp.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Condition } from './enums/condition.enum';
import { Type } from './enums/type.enum';
import { Users } from 'src/users/users.entity';

@Entity('Instruments')
export class Instruments extends TimestampEntity {
  @Column({ name: 'user_id', type: 'number', nullable: false })
  userId: number;

  @Column({ name: 'title', type: 'varchar', nullable: false })
  title: string;

  @Column({ name: 'description', type: 'text', nullable: false })
  description: string;

  @Column({ name: 'price', type: 'number', nullable: false })
  price: number;

  @Column({ name: 'location', type: 'varchar', nullable: false })
  location: string;

  @Column({
    name: 'condition',
    type: 'varchar',
    enum: Condition,
    nullable: false,
  })
  condition: Condition;

  @Column({
    name: 'type',
    type: 'varchar',
    enum: Type,
    nullable: false,
  })
  type: Type;

  @ManyToOne(() => Users, (user) => user.instruments)
  @JoinColumn({ name: 'userId' })
  user: Users;
}