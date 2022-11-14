import {UserService} from "../service/user-service";
import {Request, Response} from "express";

export class UserController{
    private userService: UserService
    constructor() {
        this.userService = new UserService()
    }
    showFormLogin = async (req:Request,res:Response)=>{
        res.render('user/login');
    }
    login = async (req:Request,res:Response)=> {
        let user = req.body
        console.log(user)
        let users = await this.userService.findAll(req, res);
        for (let i = 0; i < users.length; i++) {
            if (user.nameUser === users[i].nameUser && user.password === users[i].password){
                res.redirect('/products');
            }
        }
    }
}

export default new UserController();