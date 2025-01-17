import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { IsNotEmpty, IsPositive } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsPositive()
    @IsNotEmpty()
    @Column({type: 'decimal', nullable: false})
    preco: number

    @Column({length: 500, nullable: false})
    foto: string
    
}

