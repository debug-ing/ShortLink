import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity("link")
export class Link{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('character varying', {
        length: 255,
        nullable: true,
        name: 'username',
    })
    username: string;

    @Column('character varying', {
        length: 255,
        nullable: true,
        name: 'password',
    })
    password: string;
}