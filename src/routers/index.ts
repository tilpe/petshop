import { Router } from "express";

import * as PagesController from '../controllers/pagesController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router
    .get('/', PagesController.home)
    .get('/dogs', PagesController.dogs)
    .get('/cats', PagesController.cats)
    .get('/fishes', PagesController.fishes)
    .get('/search', SearchController.searchController)

export default router;