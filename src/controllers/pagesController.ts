import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const home = (req: Request, res: Response) => {
     const data = {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os animais",
            bg:    "allanimals.jpg",
        }, 
        pets: Pet.getAll()
     }

     res.render('pages/page', data);
}

export const dogs = (req: Request, res: Response) => {
    const data = {
        menu: createMenuObject('dogs'),
        banner: {
            title: "Cachorros",
            bg:    "banner_dog.jpg",
        },
        pets: Pet.getFromType('dog')
     }

    res.render('pages/page', data);
}

export const cats = (req: Request, res: Response) => {
    const data = {
        menu: createMenuObject('cats'),
        banner: {
            title: "Gatos",
            bg:    "banner_cat.jpg",
        },
        pets: Pet.getFromType('cat')
     }

    res.render('pages/page', data);
}

export const fishes = (req: Request, res: Response) => {
    const data = {
        menu: createMenuObject('fishes'),
        banner: {
            title: "Peixes",
            bg:    "banner_fish.jpg",
        },
        pets: Pet.getFromType('fish')
     }

    res.render('pages/page', data);
}