import {Router} from "express";
import userController from "../controller/user-controller";


export const routerUser = Router();
routerUser.get('/login',userController.showFormLogin);
routerUser.post('/login', userController.login)