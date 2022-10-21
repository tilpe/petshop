import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const searchController = (req: Request, res: Response) => {
     let query: string = req.query.q as string;

     const data = {
          menu: createMenuObject(''),
          pets: Pet.getFromName(query)
       }
  
     res.render('pages/search', data);
}