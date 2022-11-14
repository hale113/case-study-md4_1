import {AppDataSource} from "../data-source";
import {User} from "../model/user";
import {Request, Response} from "express";


export class UserService {
    private userRepository: any;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    findAll = async (req: Request, res: Response) => {
        return await this.userRepository.query(`select *
                                                from user`);
    }
}