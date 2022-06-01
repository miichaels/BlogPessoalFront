import { StringMap } from "@angular/compiler/src/compiler_facade_interface"
import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public titulo: string
    public tema: string
    public usuario: Usuario

}