import {Router} from "express";
import {routerProduct} from "./product-router.router";
import {routerUser} from "./user-router.router";
export const router = Router();
router.use('',routerProduct)
router.use('/user',routerUser)