import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Unit {
    @PrimaryGeneratedColumn("uuid")
    id: number;
    @Column({unique: true})
    name: string;
    @Column({nullable: true})
    description: string;
    @Column({})
    time: number;
    @Column({})
    intensity: number;
    @Column({})
    unitType: string;
    @Column({})
    session: string;
}
