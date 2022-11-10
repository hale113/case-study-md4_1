import {AppDataSource} from "../data-source";
import {Category} from "../model/category";
import {Request, Response} from "express";

export class CategoryService{
    private categoryRepository: any;
    constructor() {
        this.categoryRepository =AppDataSource.getRepository(Category);
    }
    findAll = async (req:Request,res:Response)=>{
        let categories = await this.categoryRepository.query(`select * from category`)
        return categories;
    }
}