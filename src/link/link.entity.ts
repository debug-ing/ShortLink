import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity("link")
export class Link{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        nullable: true,
        default:" ",
        name: 'link',
    })
    link: string;

    @Column('text', {
        nullable: true,
        default:" ",
        name: 'link_short',
    })
    linkShort: string;

    @Column('int', {
        nullable: true,
        name: 'open',
    })
    public open: number

    @Column('int', {
        nullable: true,
        name: 'view',
    })
    public view: number
}