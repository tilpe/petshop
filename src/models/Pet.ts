import { Pets, dataPets, PetType } from '../data/data';

const pet = Pets;

export const Pet = {
    getAll: (): dataPets[] => {
        return pet;
    }, 
    getFromType: (type: PetType): dataPets[] => pet.filter(item => item.type === type),
    getFromName: (name: string): dataPets[] =>  pet.filter(item => item.name.toLowerCase().indexOf(name.toLocaleLowerCase()) > - 1)
} 