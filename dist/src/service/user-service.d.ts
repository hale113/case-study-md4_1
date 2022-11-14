import { Request, Response } from "express";
export declare class UserService {
    private userRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
